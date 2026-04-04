const weddingsData = [
    { src: "Olivia&Spencer-3.webp", group: "Olivia-1" },
    { src: "Olivia&Spencer-4.webp", group: "Olivia-1" },
    { src: "Olivia&Spencer-5.webp", group: "Olivia-1" },
    { src: "Olivia&Spencer-6.webp", group: "Olivia-1" },
    { src: "Adriana-1.webp", group: "Adriana-1" },
    { src: "Adriana-2.webp", group: "Adriana-1" },
    { src: "Adriana-3.webp", group: "Adriana-1" },
    { src: "Olivia&Spencer-1.webp", group: "Olivia-2" },
    { src: "Olivia&Spencer-7.webp", group: "Olivia-2" },
    { src: "Olivia&Spencer-2.webp", group: "Olivia-2" },
    { src: "Adriana-4.webp", group: "Adriana-2" },
    { src: "Adriana-5.webp", group: "Adriana-2" },
    { src: "Adriana-6.webp", group: "Adriana-2" },
    { src: "Olivia&Spencer-10.webp", group: "Olivia-3" },
    { src: "Olivia&Spencer-11.webp", group: "Olivia-3" },
    { src: "Olivia&Spencer-12.webp", group: "Olivia-3" },
    { src: "Olivia&Spencer-13.webp", group: "Olivia-3" },
    { src: "Olivia&Spencer-14.webp", group: "Olivia-3" },
    { src: "Olivia&Spencer-8.webp", group: "Olivia-4" },
    { src: "Olivia&Spencer-9.webp", group: "Olivia-3" },

];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#current_img img");
    const nextButton = document.querySelector("#move_right");
    const prevButton = document.querySelector("#move_left");

    function displayPhoto() {
        const item = weddingsData[currentIndex];
 
        mainImage.src = "images/weddings_webp/" + item.src;
        mainImage.alt = "Weddings Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % weddingsData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + weddingsData.length) % weddingsData.length;
        displayPhoto();
    };

    displayPhoto();
});