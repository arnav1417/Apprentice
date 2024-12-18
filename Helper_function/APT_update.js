const { exec } = require("child_process");
exports.update=()=>{
    return new Promise ((resolve)=>{
        exec(`apt update`,  (error, stdout, stderr) => {
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