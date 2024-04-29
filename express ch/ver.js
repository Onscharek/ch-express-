// day dec
let day= new Date().getDay();
// hour decc
let hours= new Date().getHours();
// print hour
console.log(hours);
function verif(req,res,next){
    if (day > 0 && day < 8 && hours > 8 && hours < 23) next(); 
     else 
     res.send("sorry we are out of service come back from monday to friday from 9 to 17");}

     module.exports=verif;
