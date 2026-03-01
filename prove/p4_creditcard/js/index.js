let cardNum;
let cardHold;
let cardExpM;
let cardExpY;
let securityNum;

document.getElementById("submitButton").onclick = function(){
    cardNum = document.getElementById("inputCardNum").value;
    cardHold = document.getElementById("inputCardHold").value;
    cardExpM = document.getElementById("month").value;
    cardExpY = document.getElementById("year").value;
    securityNum = document.getElementById("cvv").value;
    console.log(cardNum, cardHold, cardExpM, cardExpY, securityNum,)
}

cardNum