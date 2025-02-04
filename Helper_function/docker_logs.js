const { exec } = require("child_process");
exports.dockerLogs = (containerName,tailLength=5) => {
    if(tailLength===0) tailLength=`all`;
    return new Promise((resolve) => {
        exec(`docker logs ${containerName} --tail=${tailLength}`, (error, stdout, stderr) => {
            if (stderr) {
                // console.log(stderr);
                resolve({ "Complete": stderr });
            }
            else if (stdout) { 
                resolve({"Complete":stdout});
            }
        })
    })
}