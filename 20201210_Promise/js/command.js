let USA_travel = new Promise((resolve, reject) => {
   
    setTimeout(()=>{ 
        console.log("Process started ...")
        resolve();
   },2000);
  
    //reject("Bed idia");
}).then(start =>{
    return new Promise((resolve, reject) =>{
        let travel = {
        Money:true
        }
    })

}).catch(err =>console.log(err));