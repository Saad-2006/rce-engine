const express = require('express');
const bodyParser = require('body-parser');
const { generateFile, executeCpp } = require('./api/compiler'); // Import your function

const app = express();
app.use(bodyParser.json());

app.post('/run', async(req, res) => {
    const { language, code } = req.body;
    
    if (!code) {
        return res.status(400).json({ success: false, error: "Empty code body!" });
    }

    try {

        const filePath = generateFile(language, code);
        
        const output = await executeCpp(filePath);
        res.json({ filePath, output});
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(8000, () => {
    console.log("Listening on Port 8000");
});