function matchesWonByteam(matches) {
    let Fresult = {};
   
   for(var i=2008;i<2020;i++){
    let result = {};
   var team=matches.filter(a=>(a.season)==i); 

   for (let te of team) {
    const t = te.winner; 
    
    if (result[t] ) {
     
      result[t] += 1;
    } else {
  
      result[t] = 1;
    }
    
  }
  Fresult[i]=result;

}
   
    return Fresult;
    
  }
  
  module.exports = matchesWonByteam;
