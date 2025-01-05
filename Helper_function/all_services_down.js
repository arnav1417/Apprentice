const { exec } = require("child_process");
exports.allServicesDown = () => {
    return new Promise((resolve) => {
        exec(`docker compose ls --format json | tee file_config.json`, (error, stdout, stderr) => {
            if (stderr) {
                resolve({ "stderr": stderr });
            }
            else if (stdout) {
                const out = Object.values(JSON.parse(stdout)).map((value) => {
                    return new Promise((resolve, reject) => {
                        const command = `docker compose -f ${value.ConfigFiles} down`
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
                    });
                });
                Promise.all(out)
                    .then(results => {
                        resolve({ "Complete": true })
                    })
                    .catch(error => {
                        resolve({ "stderr": error });
                    });
            }
        })
    })
}