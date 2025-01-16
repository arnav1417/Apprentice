const { exec } = require("child_process");
const path = require("path");
const file_loc = require("dotenv").config({path:path.join(__dirname,'../','.env')}).parsed.file_loc;
exports.generateFile = () => {
    return new Promise((resolve) => {
        exec(`docker compose ls --format json | tee ${file_loc}`, (error, stdout, stderr) => {
            if (error) {resolve({"error":error}) }
            else if(stdout) {resolve({"Complete":true}) }
        })

    })
}