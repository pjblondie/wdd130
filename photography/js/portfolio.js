const seattleData = [
    { src: "Seattle-2.webp", group: "A" }, 
    { src: "Seattle-1.webp", group: "A" }, 
    { src: "Seattle-12.webp", group: "A" }, 
    { src: "Seattle-11.webp", group: "B" }, 
    { src: "Seattle-15.webp", group: "B" }, 
    { src: "Seattle-3.webp", group: "B" }, 
    { src: "Seattle-6.webp", group: "B" }, 
    { src: "Seattle-16.webp", group: "C" }, 
    { src: "Seattle-20.webp", group: "C" }, 
    { src: "Seattle-10.webp", group: "C" }, 
    { src: "Seattle-21.webp", group: "D" }, 
    { src: "Seattle-19.webp", group: "D" }, 
    { src: "Seattle-22.webp", group: "D" }, 
    { src: "Seattle-17.webp", group: "E" }, 
    { src: "Seattle-18.webp", group: "E" }, 
    { src: "Seattle-13.webp", group: "F" }, 
    { src: "Seattle-14.webp", group: "F" }, 
    { src: "Seattle-26.webp", group: "F" }, 
    { src: "Seattle-7.webp", group: "G" }, 
    { src: "Seattle-4.webp", group: "G" }, 
    { src: "Seattle-5.webp", group: "G" }, 
    { src: "Seattle-25.webp", group: "H" }, 
    { src: "Seattle-24.webp", group: "H" }, 
    { src: "Seattle-23.webp", group: "H" }, 
    { src: "Seattle-9.webp", group: "I" }, 
    { src: "Seattle-8.webp", group: "I" }
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#current_img img");
    const nextButton = document.querySelector("#move_right");
    const prevButton = document.querySelector("#move_left");

    function displayPhoto() {
        const item = seattleData[currentIndex];
 
        mainImage.src = "images/Seattle_webp/" + item.src;
        mainImage.alt = "Seattle Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % seattleData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + seattleData.length) % seattleData.length;
        displayPhoto();
    };

    displayPhoto();
});