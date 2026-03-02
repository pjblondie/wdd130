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
    const storeDetails = [cardHold];
    const cardDetails = [cardHold, cardNum, cardExpM, cardExpY, securityNum]; 
    const cardNumbers = [];
    for(let detail of cardDetails){
        let detailCheck = Boolean(detail);
        if(detailCheck == false){
            window.alert('Must fill out all sections to submit form');
            return;
        }
        else{
        }
    }

      // card number check
    if(cardNum.replace(/ /g, "").length == 16){
        cardNumbers.push(cardNum)
    }
    else{
        window.alert('Invalid card number legnth')
        return;
    }
    // month check
    if(cardExpM.replace(/ /g, "").length == 2){
        cardNumbers.push(cardExpM)
    }
    else{
        window.alert('Invalid month format, MM or 0M')
        return;
    }
    //year check
    if(cardExpY.replace(/ /g, "").length == 2){
        cardNumbers.push(cardExpY)
    }
    else{
        window.alert('Invalid year format, YY')
        return;
    }
    //cvv check
    if(securityNum.replace(/ /g, "").length == 3){
        cardNumbers.push(securityNum)
    }
    else{
        window.alert('Invalid CVV format, xxx')
        return;
    }
    for(let number of cardNumbers){
        let numberCheck = Number(number.replace(/ /g, ""))
        if (isNaN(numberCheck)){
            window.alert('Number Columns must include numbers not letters or characters, Please try again');
            return;
        }
        else{
            storeDetails.push(number)
        }
    }
    
    
  

    console.log(storeDetails);
}


