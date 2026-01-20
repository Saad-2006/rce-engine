const fs = require('fs');
const path = require('path');

exports.generateFile = (format, content) => {
    // 1. Generate a unique ID (e.g., timestamp + random number)
    const jobId = Date.now()-Math.random();

    // 2. create the filename (e.g., "12345.cpp")
    const filename = `${jobId}.${format}`; // 1768.cpp

    // 3. Construct the full path using path.join()
    // HINT: Point to the 'temp' folder outside the 'api' folder
    
    const filePath = path.join(__dirname, '..', 'temp', filename);
        // TODO: Your Logic Here

    // 4. Write the file to disk
    // TODO: Use fs.writeFileSync
    fs.writeFileSync(filePath, content);

    return filePath;
};