
function showData1(){
  
 const seasonT = Number(document.getElementById("seasons2").value);
fetch('/topEconomic?year='+seasonT)  
.then((resp) => resp.json())
.then((response)=>{
  visualizetopEconomicalBowlers(response);
  function visualizetopEconomicalBowlers(response) {
      const seriesData=[];
      for(let player in response){
        seriesData.push([player,response[player]]);
      }
     seriesData.sort(function(a,b){
        return a[1]-b[1];
      });
      let d=seriesData.slice(0,10);
   

    
    Highcharts.chart("top_economical _bowlers", {
      chart: {
        type: "column"
      },
      title: {
        text: `<b>D. Top Economical Bowlers in ${seasonT} season</b>`
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
          text: "Economy"
        }
      },
      series: [
        {
          name: "Players",
          data: d
        }
      ]
    });
        
  
  }

})
}
  