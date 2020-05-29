function showData(){
    function fetchAndVisualizeData() {
      fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData_dynamic);
    } 
    fetchAndVisualizeData();
    
    function visualizeData_dynamic(data) {
   
    const season = document.getElementById("seasons1").value;
  
    visualizeExtraRunEachTeam((data.extraRunByeachteam)[season]);

    
    return;
  }
  
  
  }


  function visualizeExtraRunEachTeam(extraRunByeachteam) {
    const season = document.getElementById("seasons1").value;
  const seriesData = [];
  for (let team in extraRunByeachteam) {
    seriesData.push([team, extraRunByeachteam[team]]);
  }

  Highcharts.chart("extrarun_each _team", {
    chart: {
      type: "column"
    },
    title: {
      text: `<b>C. Extra runs conceded by each team  ${season}</b>`
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name:"IPL Teams",
        data: seriesData
      }
    ]
  });
      
}
