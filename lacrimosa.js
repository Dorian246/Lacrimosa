
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const videos = document.querySelectorAll('.video-container iframe');


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = '#191919';
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


videos.forEach(video => {
    video.addEventListener('click', () => {
        video.style.height = '500px';
    });
});
