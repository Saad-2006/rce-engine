const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');
const { stdout, stderr } = require('process');

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

exports.executeCpp = (filePath)=>{
    const jobId = path.basename(filePath).split('.')[0];
    const outPath = path.join(path.dirname(filePath), `${jobId}.out`);

    // this is the command we need to execute to run and compile the code.
    const command = `g++ ${filePath} -o ${outPath} && ${outPath}`;

    // execution of code goes here
    return new Promise((resolve, reject)=>{
        exec(command,{timeout:3000}, (error, stdout, stderr)=>{
            if(error && error.killed){
                reject({error:"Time Limit Exceeded!", stderr});
                return;
            }
            if(error){
                reject({error:error.message, stderr});
                return;
            }
            if(stderr){
                reject(stderr);
                return;
            }
            resolve(stdout);
        })
    })
}