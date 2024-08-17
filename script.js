// Selecting elements
const door = document.getElementById('door');
const gallery = document.getElementById('gallery');
const flowerpot = document.getElementById('flowerpot');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const room = document.querySelector('.room');

// Scroll Left
scrollLeftBtn.addEventListener('click', () => {
    gallery.scrollLeft -= 300; // Adjust scroll distance as needed
});

// Scroll Right
scrollRightBtn.addEventListener('click', () => {
    gallery.scrollLeft += 300; // Adjust scroll distance as needed
});

// Door click event to enter the gallery
door.addEventListener('click', () => {
    door.style.transform = 'translate(-50%, -50%) scale(0.1)';
    setTimeout(() => {
        door.style.display = 'none';
        gallery.style.display = 'block';
        flowerpot.style.display = 'block'; // Ensure flowerpot is visible
        centerRoom(); // Center the view on the window and flowerpot
    }, 1000);
});

// Function to center the room on the window and flowerpot
function centerRoom() {
    const roomWidth = room.scrollWidth;
    const galleryWidth = gallery.clientWidth;
    
    const centerPosition = (roomWidth - galleryWidth) / 2;
    gallery.scrollLeft = centerPosition;
}

// Close button functionality
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    gallery.style.display = 'none';
    door.style.display = 'block';
    door.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset door position and size
    flowerpot.style.display = 'none'; // Hide the flowerpot when exiting the room
});

// Drag functionality for the gallery room
let isDragging = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
    isDragging = true;
    gallery.classList.add('grabbing');
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseleave', () => {
    isDragging = false;
    gallery.classList.remove('grabbing');
});

gallery.addEventListener('mouseup', () => {
    isDragging = false;
    gallery.classList.remove('grabbing');
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scrolling speed
    gallery.scrollLeft = scrollLeft - walk;
});
