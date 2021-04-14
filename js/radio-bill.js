// get a reference to the sms or call radio buttons
const billItemTypeRadioElem = document.querySelector(".billItemTypeRadio")

// get a reference to the call 
const callTotalTwoElement = document.querySelector(".callTotalTwo");
//get reference to the sms
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");

//get a reference to the total2 element
const totalTwoElem = document.querySelector(".totalTwo");
//get a reference to the add button
const myradioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var trackBillCall = 0;
var trackBillSms = 0;
var trackBill = 0;
//in the event listener get the value from the billItemTypeRadio radio buttons
function totalRadioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItem = checkedRadioBtn.value
    if (billItem === "call"){
            trackBillCall   += 2.75;
        }
        else if (billItem === "sms"){
            trackBillSms += 0.75;
        }
        else if(billItem === ""){
            trackBill += 0.00;
        }
    }
    callTotalTwoElement.innerHTML = trackBillCall.toFixed(2);
    smsTotalTwoElement.innerHTML = trackBillSms.toFixed(2);
    var totalcost =  trackBillCall + trackBillSms;
    totalTwoElem.innerHTML = totalcost.toFixed(2);

    if(totalcost > 30){
        totalTwoElem.classList.add("warning");
    }if(totalcost > 50){

        totalTwoElem.classList.add("danger");
    }  
    // billItemType will be 'call' or 'sms'
}

// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
        
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//add an event listener for when the add button is pressed
myradioBillAddBtn.addEventListener('click', totalRadioBill);