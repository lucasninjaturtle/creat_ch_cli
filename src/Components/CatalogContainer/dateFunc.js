// a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.

export const dateFunc = (dateReceived)=>{


let today = Date()

// One day Time in ms (milliseconds) 
    var one_day = 1000 * 60 * 60 * 24 
  
// To set present_dates to two variables 
var present_date = new Date(); 
  
// 0-11 is Month in JavaScript 
var givenDay = new Date(dateReceived)
  
// To Calculate next year's Christmas if passed already. 
if (present_date.getMonth() == 11 && present_date.getdate() > 25) 
    givenDay.setFullYear(givenDay.getFullYear() + 1) 
  
// To Calculate the result in milliseconds and then converting into days 
var Result = Math.round(givenDay.getTime() - present_date.getTime()) / (one_day); 
  
// To remove the decimals from the (Result) resulting days value 
var Final_Result = Result.toFixed(0)*-1 
  
var lastString = Final_Result + '' + ' days ago';
var givenDay2 = givenDay.toString().split(' ')[1]+'-'+givenDay.toString().split(' ')[2]+'-'+givenDay.toString().split(' ')[3]
if(today === dateReceived) return 'today'
if(Final_Result > 7) return givenDay2

if(Final_Result <= 7) return lastString;


}

