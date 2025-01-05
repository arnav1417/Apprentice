const { exec } = require("child_process");
exports.generateFile = () => {
    return new Promise((resolve) => {
        exec(`docker compose ls --format json | tee file_config.json`, (error, stdout, stderr) => {
            if (error) {resolve({"error":error}) }
            else if(stdout) {resolve({"Complete":true}) }
        })

    })
}