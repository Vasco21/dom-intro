// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
const myaddToBillBtn = document.querySelector(".addToBillBtn");
// get a reference to the call 
const callTotalOneElement = document.querySelector(".callTotalOne");
//get reference to the sms
const smsTotalOneElement = document.querySelector(".smsTotalOne");

const totalOneElement = document.querySelector(".totalOne");
var userTemplate = document.querySelector(".userTemplate").innerHTML

 var textbillTemp = Handlebars.compile(userTemplate);
//create a variable that will keep track of the total bill
var TotalTrackCall = 0;
var TotalTrackSms = 0
var TotalTracInv = "";


function totalTextBill(){
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
        var billItem = billTypeTextElement.value.trim();
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
        if (billItem === "call"){
            TotalTrackCall  += 2.75;
        }
        else if (billItem === "sms"){
            TotalTrackSms += 0.75;
        }
        else if(billItem === ""){
            TotalTracInv += 0.00;
        }
        callTotalOneElement.innerHTML = textbillTemp({totalCallTemp: TotalTrackCall.toFixed(2)}) ;
        smsTotalOneElement.innerHTML = textbillTemp({totalSmsTemp: TotalTrackSms.toFixed(2)}) ;
        var totalcost =  TotalTrackCall + TotalTrackSms;
        totalOneElement.innerHTML = textbillTemp({totalCostTemp: totalcost.toFixed(2)}) ;
        
        totalOneElement.classList.remove("danger");
        totalOneElement.classList.remove("warning");

        if(totalcost > 30){
            totalOneElement.classList.add("warning");
        }if(totalcost > 50){
    
            totalOneElement.classList.add("danger");
        }   
}




//add an event listener for when the add button is pressed
myaddToBillBtn.addEventListener('click', totalTextBill);


// alert(myaddToBillBtn);

