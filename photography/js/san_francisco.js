const sanFranciscoData = [
    { src: "SanFrancisco-22.webp", group: "A" }, 
    { src: "SanFrancisco-24.webp", group: "A" }, 
    { src: "SanFrancisco-21.webp", group: "A" }, 
    { src: "SanFrancisco-23.webp", group: "A" }, 
    { src: "SanFrancisco-18.webp", group: "G" }, 
    { src: "SanFrancisco-16.webp", group: "G" }, 
    { src: "SanFrancisco-15.webp", group: "G" }, 
    { src: "SanFrancisco-5.webp", group: "C" }, 
    { src: "SanFrancisco-6.webp", group: "C" }, 
    { src: "SanFrancisco-19.webp", group: "C" }, 
    { src: "SanFrancisco-20.webp", group: "D" }, 
    { src: "SanFrancisco-25.webp", group: "D" }, 
    { src: "SanFrancisco-26.webp", group: "D" }, 
    { src: "SanFrancisco-27.webp", group: "D" }, 
    { src: "SanFrancisco-13.webp", group: "E" }, 
    { src: "SanFrancisco-14.webp", group: "E" }, 
    { src: "SanFrancisco-17.webp", group: "E" }, 
    { src: "SanFrancisco-8.webp", group: "F" }, 
    { src: "SanFrancisco-7.webp", group: "F" },
    { src: "SanFrancisco-9.webp", group: "F" },  
    { src: "SanFrancisco-10.webp", group: "F" }, 
    { src: "SanFrancisco-1.webp", group: "B" }, 
];

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {

    // Image Functionality
    const mainImage = document.querySelector("#current_img img");
    const nextButton = document.querySelector("#move_right");
    const prevButton = document.querySelector("#move_left");
    
    // Menu Drop Down
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('nav');
    
    // Modal
    const modal = document.querySelector("#photo-modal");
    const modalImage = document.querySelector("#modal-image");
    const closeModal = document.querySelector("#close-modal");

    /* --- 2. GALLERY FUNCTIONS --- */
    function displayPhoto() {
        const item = sanFranciscoData[currentIndex];
        mainImage.src = "images/San_Francisco_webp/" + item.src;
        mainImage.alt = "San Francisco Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % sanFranciscoData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + sanFranciscoData.length) % sanFranciscoData.length;
        displayPhoto();
    };

    /* --- 3. MOBILE MENU LOGIC --- */
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

    /* --- 4. MODAL LOGIC --- */
    mainImage.addEventListener("click", () => {
        const item = sanFranciscoData[currentIndex];
        
        modalImage.src = "images/San_Francisco_webp/" + item.src;
        modalImage.alt = item.group;
        
        modal.showModal();
    });

    closeModal.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });

    /* --- 5. INITIALIZE --- */
    displayPhoto();
});