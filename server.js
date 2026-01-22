const express = require('express');
const bodyParser = require('body-parser');
const { generateFile, executeCpp } = require('./api/compiler'); // Import your function
const fs = require('fs');
const path = require('path');
const app = express();
app.use(bodyParser.json());

app.post('/run', async(req, res) => {
    const { language, code } = req.body;
    
    if (!code) {
        return res.status(400).json({ success: false, error: "Empty code body!" });
    }
    let filePath;
    let outPath;
    try {
        filePath = generateFile(language, code);
        const jobID=path.basename(filePath).split('.')[0];
        outPath=path.join(path.dirname(filePath), `${jobID}.out`);
        const output = await executeCpp(filePath);
        res.json({ filePath, output});
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
    finally{
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath);
        }
        if(fs.existsSync(outPath)){
            fs.unlinkSync(outPath);
        }
    }
});

app.listen(8000, () => {
    console.log("Listening on Port 8000");
});