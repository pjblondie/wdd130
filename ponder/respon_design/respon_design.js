const dropMenu = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');
const bar_1 = document.querySelector('.bar1')
const bar_2 = document.querySelector('.bar2')
const bar_3 = document.querySelector('.bar3')

dropMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
    bar_1.classList.toggle("change1")
    bar_2.classList.toggle("change2")
    bar_3.classList.toggle("change3")
});
