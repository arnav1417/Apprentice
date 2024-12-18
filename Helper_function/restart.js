const { exec } = require("child_process");
exports.restart=(containerName)=>{
    return new Promise ((resolve)=>{
        exec(`docker restart ${containerName}`,  (error, stdout, stderr) => {
            if(stderr){
              resolve({"stderr":stderr});
          }
          else if (stdout){
              resolve({"Complete":stdout});
          }
          else{
              resolve({"error":error});
          }
          } )
    })
}