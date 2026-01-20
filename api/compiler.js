const fs = require('fs');
const path = require('path');

exports.generateFile = (format, content) => {
    // 1. Generate a unique ID (timestamp - random number)
    const jobId = Date.now()-Math.random();
    // 2. create the filename 
    const filename = `${jobId}.${format}`; // 1768.cpp
    // 3. Construct the full path using path.join()
    const filePath = path.join(__dirname, '..', 'temp', filename);
    // 4. Write the file to disk
    fs.writeFileSync(filePath, content);

    return filePath;
};