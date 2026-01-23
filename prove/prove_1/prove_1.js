const themeSelector = document.querySelector("#light_dark")
const logoBlue =document.querySelector(".byui_logo")
const logoWhite =document.querySelector(".byui_logo_white")
themeSelector.addEventListener('change', function(){
    let theme = themeSelector.value;
    console.log(theme);
    
    if(theme === "Light"){
        document.documentElement.style.setProperty("--bgColor", "white")
        document.documentElement.style.setProperty("--textColor", "black")
        logoBlue.style.display ="inline-block"
        logoWhite.style.display ="none"

    }
    else if(theme ==="Dark"){
        document.documentElement.style.setProperty("--bgColor", "black")
        document.documentElement.style.setProperty("--textColor", "white")
        logoWhite.style.display ="inline-block"
        logoBlue.style.display ="none"
    }


})