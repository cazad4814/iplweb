function extraRunByeachteam(deliveries,matches) {
  let res={};
   for(let k=2008;k<=2019;k++){
  let id=matches.filter(a=>(a.season)==Number(k)).map(a=>a.id);
  
  let team;
  team=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.extra_runs)>0)
  .map(a=>a.bowling_team));
  let extrarun=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.extra_runs)>0)
  .map(a=>a.extra_runs));
  var uniqueArray = [...new Set(team)]

  let r={};
  for(let j=0;j<uniqueArray.length;j++){
    let t=uniqueArray[j].split(" ");
   
      let c=0;
  for(let i=0;i<team.length;i++){
    let h=team[i].split(" ");
            if(t[0]===h[0]){
              c=c+Number(extrarun[i]);
            }
  }
  r[uniqueArray[j]]=c;
}
res[k]=r;
   }
  
    return res;
    
  }
  
  module.exports = extraRunByeachteam;
  