const portraitsData = [
    { src: "Becsy-9.webp", group: "WinterBecsy" },
    { src: "Becsy-10.webp", group: "WinterBecsy" },
    { src: "Becsy-11.webp", group: "WinterBecsy" },
    { src: "Becsy-12.webp", group: "WinterBecsy" },
    { src: "Emma-2.webp", group: "WinterEmma" },
    { src: "Francessca-1.webp", group: "Francessca" },
    { src: "Francessca-2.webp", group: "Francessca" },
    { src: "Francessca-3.webp", group: "Francessca" },
    { src: "Francessca-4.webp", group: "Francessca" },
    { src: "Francessca-5.webp", group: "Francessca" },
    { src: "Ella-1.webp", group: "Ella" },
    { src: "Ella-2.webp", group: "Ella" },
    { src: "Sadie-1.webp", group: "Sadie" },
    { src: "Sadie-2.webp", group: "Sadie" },
    { src: "Sadie-3.webp", group: "Sadie" },
    { src: "Sadie-4.webp", group: "Sadie" },
    { src: "Becsy-1.webp", group: "Becsy" },
    { src: "Becsy-2.webp", group: "Becsy" },
    { src: "Becsy-3.webp", group: "Becsy" },
    { src: "Becsy-5.webp", group: "Becsy" },
    { src: "Becsy-6.webp", group: "Becsy" },
    { src: "Mirah-1.webp", group: "Mirah" },
    { src: "Mirah-2.webp", group: "Mirah" },
    { src: "Mirah-3.webp", group: "Mirah" },


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
        const item = portraitsData[currentIndex];
        mainImage.src = "images/Portraits_webp/" + item.src;
        mainImage.alt = "Portraits Photo Group " + item.group;
    }

    nextButton.onclick = function() {
        currentIndex = (currentIndex + 1) % portraitsData.length;
        displayPhoto();
    };

    prevButton.onclick = function() {
        currentIndex = (currentIndex - 1 + portraitsData.length) % portraitsData.length;
        displayPhoto();
    };

    /* --- 3. MOBILE MENU LOGIC --- */
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });

    /* --- 4. MODAL LOGIC --- */

  mainImage.addEventListener("click", () => {
    const item = portraitsData[currentIndex];
    
    modalImage.src = "images/Portraits_webp/" + item.src;
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