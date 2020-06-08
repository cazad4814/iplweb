const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedYear=require("./ipl/matchesPlayedPerYear");
const matchesWonTeam=require("./ipl/matchesWonByteam");
const extarunEachTeam=require("./ipl/extraRunByeachteam");
const topeconomicalbowlers=require("./ipl/topEconomicalBowlers");

const storyplayerdetails=require("./ipl/storyPlayerDetails");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH="./public/data.json";
const JSON_OUTPUT_FILE_PATH_TOPECONOMICAL="./public/topEconomic.json";
  function main(){
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
    csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries =>{
     let extra_runs_each_team=extarunEachTeam(deliveries,matches);
    
     let topeconomical=topeconomicalbowlers(deliveries,matches);
     let story=storyplayerdetails(deliveries,matches);
  
     
    let matchesWon=matchesWonTeam(matches);   
  
   let result=matchesPlayedYear(matches);
   saveMatchesPlayedPerYear(result,matchesWon,extra_runs_each_team,story);
   saveTopEconomicalBowlers(topeconomical);
  });
    });
    
  }



function saveMatchesPlayedPerYear(result,matchesWon,extra_runs_each_team,story){
  const jsonData={
    matchesPlayedPerYear:result,saveMatchesWonByTeam:matchesWon,
    extraRunByeachteam:extra_runs_each_team,storyPlayerDetails:story
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err=>{
    if(err){
          Console.err(err);
    }
  });
}


function saveTopEconomicalBowlers(topeconomical){
  const jsonData={
    topEconomicalBowlers:topeconomical
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_TOPECONOMICAL, jsonString, "utf8", err=>{
    if(err){
          Console.err(err);
    }
  });
}

  main();
  