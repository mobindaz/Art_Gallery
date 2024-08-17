// Selecting elements
const door = document.getElementById('door');
const gallery = document.getElementById('gallery');
const room = document.querySelector('.room');

// Door click event to enter the gallery
door.addEventListener('click', () => {
    door.style.transform = 'translate(-50%, -50%) scale(0.1)';
    setTimeout(() => {
        door.style.display = 'none';
        gallery.style.display = 'block';
    }, 1000);
});

// Drag functionality
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
