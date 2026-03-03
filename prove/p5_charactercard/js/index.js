let wounds;
let currentRank;
let characterName;


// currentRank="Sergant"
characterName = document.getElementById("characterName");

wounds = 5;
document.getElementById("wounds").textContent=wounds;
function WoundsCalc(){
if(currentRank == "Sergant"){
    wounds = 5;
    document.getElementById("wounds").textContent=wounds;
}
else if(currentRank == "Captain"){
    wounds = 7;
    document.getElementById("wounds").textContent=wounds;
}
else if(currentRank == "Chapter Master"){
    wounds = 10;
    document.getElementById("wounds").textContent=wounds;
}
else if(currentRank == "Marine"){
    wounds = 2;
    document.getElementById("wounds").textContent=wounds;
}
}
document.getElementById("attack").onclick =function(){
    if(wounds >= 1)
    wounds -= 1;
    console.log(wounds);
    document.getElementById("wounds").textContent=wounds
    if(wounds <=0){
        window.alert("Aurelian died!")
    }
}

updateRank=-1
const rank = ["Marine", "Sergant", "Captain", "Chapter Master"]
document.getElementById("rankUp").onclick = function(){
    if (updateRank <3){
    updateRank += 1
    currentRank = rank[updateRank]
    document.getElementById("rank").textContent=currentRank
    WoundsCalc()
}
else{
    window.alert("Max rank achieved!")
}
}
