const { exec } = require("child_process");
exports.stopContainer=(ContainerName)=>{
    return new Promise ((resolve)=>{
        exec(`docker stop ${ContainerName}`,  (error, stdout, stderr) => {
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