const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Generates a file with the provided code content.
 * Returns the absolute file path.
 */
exports.generateFile = (format, content) => {
    const jobID = Date.now().toString(); // Simple unique ID
    const filename = `${jobID}.${format}`;
    
    // Path: Go up one level (..) to root, then into 'temp'
    const dirCodes = path.join(__dirname, '..', 'temp');

    // Ensure 'temp' directory exists
    if (!fs.existsSync(dirCodes)) {
        fs.mkdirSync(dirCodes, { recursive: true });
    }

    const filePath = path.join(dirCodes, filename);
    fs.writeFileSync(filePath, content);
    return filePath;
};

/**
 * Compiles and executes the code file.
 * Returns a Promise that resolves with stdout or rejects with error.
 */
exports.executeCode = (filePath, language) => {
    const jobID = path.basename(filePath).split('.')[0];
    const outPath = path.join(path.dirname(filePath), `${jobID}.out`);

    let command;

    if (language === "cpp") {
        // C++: Compile to .out, then run
        // Double quotes handle paths with spaces
        command = `g++ "${filePath}" -o "${outPath}" && "${outPath}"`;
    } 
    else if (language === "py") {
        // Python 3: Interpret directly
        command = `python3 "${filePath}"`;
    } 
    else {
        return Promise.reject("Unsupported Language");
    }

    return new Promise((resolve, reject) => {
        // Timeout: 5 seconds max execution time
        exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
            if (error) {
                // 1. Time Limit Exceeded
                if (error.killed) {
                    reject({ error: "Time Limit Exceeded (5s)" });
                    return;
                }
                // 2. Compilation/Runtime Error
                // Prioritize stderr (compiler messages), fallback to error message
                reject({ error: error.message, stderr: stderr || error.message });
                return;
            }
            // 3. Success
            resolve(stdout);
        });
    });
};