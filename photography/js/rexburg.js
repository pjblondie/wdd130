const RexburgData = [
    { src: "SanFrancisco-22.webp", group: "A" }, 

];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#current_img img");
    const nextButton = document.querySelector("#move_right");
    const prevButton = document.querySelector("#move_left");

    function displayPhoto() {
        const item = RexburgData[currentIndex];
 
        mainImage.src = "images/San_Francisco_webp/" + item.src;
        mainImage.alt = "San Francisco Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % RexburgData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + RexburgData.length) % RexburgData.length;
        displayPhoto();
    };

    displayPhoto();
});