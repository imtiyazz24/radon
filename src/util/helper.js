function printDate(){
    var today = new Date();

 var date = today.getDate();
 
 console.log('Today Date is : ' + date)
    
}
 
function printMonth(){
    var month = new Date().toLocaleString("en-us",{month: "long"});
 
 console.log('current Month is : ' + month)

}

function printBatch(){
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}


module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.printBatch=printBatch