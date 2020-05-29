var object=require('./public/topEconomic.json');
const express=require('express')
const app = express()

app.use(express.static('public'))
app.get('/topEconomic',(req,res)=>
{
    
    const season=req.query.year;
    const result=object.topEconomicalBowlers[season];

    res.send(result);
})
app.listen(process.env.PORT || 8090,() =>console.log('All is ok!'))
