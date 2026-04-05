const RexburgData = [
    { src: "Rexburg-12.webp", group: "A" }, 
    { src: "Rexburg-15.webp", group: "A" }, 
    { src: "Rexburg-14.webp", group: "A" }, 
    { src: "Rexburg-13.webp", group: "A" }, 
    { src: "Rexburg-1.webp", group: "B" }, 
    { src: "Rexburg-2.webp", group: "B" }, 
    { src: "Rexburg-3.webp", group: "B" },
    { src: "Rexburg-9.webp", group: "C" },
    { src: "Rexburg-4.webp", group: "C" },   
    { src: "Rexburg-10.webp", group: "C" }, 
    { src: "Rexburg-6.webp", group: "D" }, 
    { src: "Rexburg-7.webp", group: "D" }, 
    { src: "Rexburg-8.webp", group: "D" }, 
    { src: "Rexburg-16.webp", group: "D" }, 
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
        const item = RexburgData[currentIndex];
        mainImage.src = "images/Rexburg_webp/" + item.src;
        mainImage.alt = "Rexburg Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % RexburgData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + RexburgData.length) % RexburgData.length;
        displayPhoto();
    };

    /* --- 3. MOBILE MENU LOGIC --- */
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

    /* --- 4. MODAL LOGIC --- */
    mainImage.addEventListener("click", () => {
        const item = RexburgData[currentIndex];
        
        modalImage.src = "images/Rexburg_webp/" + item.src;
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