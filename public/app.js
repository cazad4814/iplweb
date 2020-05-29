      
function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  } 
  fetchAndVisualizeData();
  
  function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);

  var a=formater((data.saveMatchesWonByTeam),n=[]);
  for(team in a){(l={}).name=team,l.data=a[team],n.push(l)}
  visualizeMatchesWonTeam(data.saveMatchesWonByTeam,n);
  return;
}

function formater(e){var t={},a=-1;for(var n in e){for(var i in a++,e[n])
  {if(console.log(i),!t.hasOwnProperty(i)){t[i]=[];for(var o=0;o<a;o++)t[i].push(0)}t[i].push(e[n][i])}
  for(i in t)t[i].length<a+1&&t[i].push(0)}return t}


  


function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  console.log(seriesData);
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "<b>A. Total number of matches played each year</b>"
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
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
      
}



function visualizeMatchesWonTeam(e,t) {
  //console.log(e);
 Highcharts.chart('matches-won-team-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: '<b>B. Number of matches won by each team over all the years of IPL</b>'
    },
    subtitle: {
        text: 'Source: ipl Dataset'
    },
    xAxis: {
      categories:Object.keys(e),
      crosshair:!0
    },
    yAxis:{min:0,title:{text:"Matches won"}},
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series:t
})

  }






  





