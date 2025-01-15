const { exec } = require("child_process");
exports.dockerPull = (ConfigFile) => {
    return new Promise((resolve) => {
        const command = `docker compose -f ${ConfigFile} pull`
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject({ "Error": stderr || error.message });
            }
            if (stderr) {
                resolve({ "Complete": stderr });
            }
            if (stdout) {
                resolve({ "Complete": stdout });
            }
        });
    })
}