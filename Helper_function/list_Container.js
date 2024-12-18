const { exec } = require("child_process");
exports.listContainer=(ContainerName)=>{
    return new Promise ((resolve)=>{
        // findstr for windows
        if(ContainerName) exec(`docker ps | grep ${ContainerName}`,  (error, stdout, stderr) => {
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
          else{
            exec(`docker ps`,  (error, stdout, stderr) => {
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
          }
    })
}