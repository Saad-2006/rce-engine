const express = require('express');
const cors = require('cors');
const { generateFile, executeCode } = require('./api/compiler');
const path = require('path');
const fs = require('fs');
const db = require('./db');

const app = express();

// Enhanced CORS configuration for Live Server
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500', 'null'], // Allow Live Server + file://
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

// Log all incoming requests (debugging purposes only)
app.use((req, res, next) => {
    console.log(` ${req.method} ${req.path} from ${req.headers.origin || 'file://'}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/history', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM executions ORDER BY created_at DESC LIMIT 10');
        res.json(result.rows);
    } catch (err) {
        console.error("History fetch failed:", err);
        res.status(500).json({ error: "Could not fetch history" });
    }
});

app.post('/run', async (req, res) => {
    const { language, code } = req.body;
    console.log("[1] Request Hit Server");
    console.log("BODY RECEIVED:", req.body);

    if (!code) return res.status(400).json({ success: false, error: "Empty code!" });

    try {
        const filePath = generateFile(language, code);
        const jobID = path.basename(filePath).split('.')[0];
        const outPath = path.join(path.dirname(filePath), `${jobID}.out`);

        console.log("[2] Executing...");
        const rawOutput = await executeCode(filePath, language);

        // This was the reason it was not showing the code in the output block....! (couple hours burnt)
        // Solution:
        // 1. Convert to String explicitly
        // 2. Remove \r (Carriage Returns) which break JSON on Windows/Mac
        // 3. Trim whitespace
        const cleanOutput = rawOutput.toString().replace(/\r/g, "").trim();

        console.log("[3] Sending Clean Output:", cleanOutput);
        // Non-blocking; save to db
        try {
            await db.query(
                'INSERT INTO executions (language, code, output) VALUES ($1, $2, $3)',
                [language, code, cleanOutput]
            );
            console.log("Code execution saved to Database.");
        } catch (dbError) {
            console.error("Database Save Failed (Non-fatal):", dbError);
        }

        res.json({
            output: cleanOutput,
            filePath: filePath
        });

        // Cleanup (Delayed to be safe)
        setTimeout(() => {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
        }, 2000);

    } catch (err) {
        console.error("[ERROR]", err);
        res.status(500).json({ success: false, error: err.error || err.message });
    }
});

const PORT = process.env.PORT || 5050;

const initDB = async()=>{
    try{
        await db.query(`
                CREATE TABLE IF NOT EXISTS executions (
                id SERIAL PRIMARY KEY,
                language VARCHAR(10) NOT NULL,
                code TEXT NOT NULL,
                output TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Database Table 'executions' is ready...");
    }
    catch(err){
        console.error("Failed to initialize DB:", err);
    }
};

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on NEW CHANNEL: Port ${PORT}`);
    });
});