const { exec } = require("child_process");
const { generateFile } = require("../Helper_function/generate_file");
const fs = require('fs')
exports.allServicesUp = () => {
    return new Promise((resolve) => {
        if(!fs.existsSync('./file_config.json')){
            generateFile().then((output=>{output=="Complete"?this.allServicesUp:resolve({"no_file":true})}));
        }
        const data = JSON.parse(fs.readFileSync('./file_config.json'));
        if(data.length!=0){
        const out = Object.values(data).map((value) => {
            return new Promise((resolve, reject) => {
                const command = `docker compose -f ${value.ConfigFiles} up -d`
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
            .then(() => {
                resolve({ "Complete": true })
            })
            .catch(error => {
                resolve({ "stderr": error });
            });}
    })
}