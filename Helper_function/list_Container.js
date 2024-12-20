const { exec } = require("child_process");
const table = require("text-table");
exports.listContainer = (ContainerName) => {
    return new Promise((resolve) => {
        // findstr for windows
        if (ContainerName) exec(`docker compose ls | grep ${ContainerName}`, (error, stdout, stderr) => {
            if (stderr) {
                resolve({ "stderr": stderr });
            }
            else if (stdout) {
                resolve({ "Complete": stdout });
            }
            else {
                resolve({ "error": error });
            }
        })
        else {
            exec(`docker compose ls --format json`, (error, stdout, stderr) => {
                if (stderr) {
                    resolve({ "stderr": stderr });
                }
                else if (stdout) {
                    const tab = Object.values(JSON.parse(stdout)).map((values) => {
                        return (
                            [`${values.Name}`, `${values.Status}`]
                        )
                    })
                    var newtab =
                        "Name" + "            " + "Status\n" +
                        `${table(tab)}`
                    resolve({ "Complete": newtab });
                }
                else {
                    resolve({ "error": error });
                }
            })
        }
    })
}