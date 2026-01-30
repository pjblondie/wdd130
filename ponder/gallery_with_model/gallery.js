
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);


// Code to show modal  - Use event parameter 'e'   
function openModal(e) {
    if(e.target.tagName != 'IMG'){
        console.log('SKIP')
        return;}
    else(e.target.tagName === 'IMG'){
        console.log('SKIP')
        return;
    }

    }
    console.log(e.target)

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          