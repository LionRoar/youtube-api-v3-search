

module.exports = function(url){
    const req  = new XMLHttpRequest();
    return new Promise(( resolve , reject )=>{
      req.onreadystatechange = function() {
        if (this.readyState == 4){
          if(this.status == 200){
            let response = JSON.parse(this.response);
            resolve(response);
          }else{
            let err = JSON.parse(this.response);
            reject(err);
         }
       }
     }
      req.onerror = function(e){
        reject(new Error (this.statusText) );
      }
      req.open('GET',url,true);
      req.send(null);
  });

}
