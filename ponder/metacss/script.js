
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    let rick = document.getElementById("rick")
    let html_list = document.getElementById("html_list");
    let js_list = document.getElementById("js_list")
    let css_list = document.getElementById("css_list")
    
    if (codeValue === "js"){
       js_list.classList.add("active") 
       html_list.classList.remove("active")
       css_list.classList.remove("active")
    }
    else if (codeValue === "html"){
        html_list.classList.add("active")
        js_list.classList.remove("active")
        css_list.classList.remove("active")
    }   
    else if (codeValue === "css"){
        css_list.classList.add("active")
        js_list.classList.remove("active")
        html_list.classList.remove("active")
    }
    else if (codeValue === "rick") {
        js_list.classList.remove("active")
        html_list.classList.remove("active")
        css_list.classList.remove("active")
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
})
 
                