function storyPlayerDetails(deliveries,matches) {
  let res={};
  for(let k=2008;k<=2019;k++){
    let id=matches.filter(a=>(a.season)==Number(k)).map(a=>a.id);
  
    let player;
    player=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.batsman));
    var uniqueArray = [...new Set(player)];

    let totalRun=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.total_runs));
   
    let r={};
    for(let j=0;j<uniqueArray.length;j++){
        let run=0;   
    for(let i=0;i<player.length;i++){
              if(uniqueArray[j]===player[i]){
                  run=run+Number(totalRun[i]);

              }
    }
    
    r[uniqueArray[j]]=run;
  }
    

var sort=[];
for(var i in r){
  sort.push([i, r[i]]);
}
sort.sort(function(a,b){
  return b[1]-a[1];
});


 let palyerD= sort.slice(0,15);
let playerName=[];
for(let i=0;i<15;i++){
    playerName.push(palyerD[i][0]);
}



    let batsmanRuns=(deliveries.filter(a=>(a.match_id)>=Number(id[0]) && (a.match_id)<=Number(id[id.length-1]) && (a.total_runs)>0)
    .map(a=>a.batsman_runs));

    let result={};
    for(let j=0;j<Number(playerName.length);j++){
        let run=0;  
        let boundries=0;
        let Not_boundaries=0;
        let singles=0; 
    for(let i=0;i<Number(player.length);i++){
              if(playerName[j]===player[i]){
                  if(batsmanRuns[i]=="4" || batsmanRuns[i]=="6"){
                    boundries++;
                  }else if(batsmanRuns[i]!="4" && batsmanRuns[i]!="6" && batsmanRuns[i]>"0"){
                    Not_boundaries++;
                  }
                  if(batsmanRuns[i]=="1"){
                    singles++;
                  }
                  run=run+Number(totalRun[i]);

              }
    }
   
   result[playerName[j]]={Boundaries : boundries,No_boundaries : Not_boundaries,Singles : singles,TotalRun : run};
  
  }
  res[k]=result;
}

 return res;
 
}
    module.exports = storyPlayerDetails;
    