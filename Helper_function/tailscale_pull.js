const { exec } = require("child_process");
exports.tailscalePull = () => {
    return new Promise((resolve) => {
        exec(`docker compose ls --format json`, (error, stdout, stderr) => {
            if (stderr) {
                resolve({ "stderr": stderr });
            }
            else if (stdout) {
                const out = Object.values(JSON.parse(stdout)).map((value) => {
                    return new Promise((resolve, reject) => {
                        const Status = value.Status[value.Status.length - 2];
                        if (Number(Status) > 1) {
                            const command = `docker compose -f ${value.ConfigFiles} pull ${value.Name}-tailscale`;
                            exec(command, (error, stdout, stderr) => {
                                if (error) {
                                    resolve({ "Error": stderr || error.message });
                                }
                                else if (stderr) {
                                    resolve({ "Complete": stderr });
                                }
                                else if (stdout) {
                                    resolve({ "Complete": stdout });
                                }
                            });
                        }
                        else resolve({'error':"No Config File provided"})
                    });
                });
                Promise.all(out)
                    .then(results => {
                        resolve({ "Complete": true })
                    })
                    .catch(error => {
                        resolve({ "stderr": false });
                    });
            }
            else {
                resolve({ "error": error });
            }
        })
    })
}