
function showData2(){
    function fetchAndVisualizeData() {
      fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData_dynamic2);
    } 
    fetchAndVisualizeData();
    
    function visualizeData_dynamic2(data) {
    
    const season = document.getElementById("seasons3").value;
  
    var b=formater1((data.storyPlayerDetails)[season],n=[]);
    for(deatials in b){(l={}).name=deatials,l.data=b[deatials],n.push(l)}
    visualizestoryPlayer((data.storyPlayerDetails)[season],n);
 
    return;
  }
  
  function formater1(e){var t={},b=-1;for(var n in e){for(var i in b++,e[n])
    {if(console.log(i),!t.hasOwnProperty(i)){t[i]=[];for(var o=0;o<b;o++)t[i].push(0)}t[i].push(e[n][i])}
    for(i in t)t[i].length<b+1&&t[i].push(0)}return t}
  
  }
  
  
  function visualizestoryPlayer(f,y) {
    const season = document.getElementById("seasons3").value;
    Highcharts.chart('story-player-details-season', {
      chart: {
          type: 'bar'
      },
      title: {
          text: `E.Player Run Details ${season}`
      },
      xAxis: {
        categories:Object.keys(f),crosshair:!0
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total shot deatils'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: y
  
    }
  )
  }