const projectTrack = document.querySelector('.project-track');
const prevBtn = document.querySelector('.project-prev');
const nextBtn = document.querySelector('.project-next');
const total = projectTrack.children.length;

let index = 0;

function showProject(i) {
    index = (i + total) % total; // wraps around at both ends
    projectTrack.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => showProject(index + 1));
prevBtn.addEventListener('click', () => showProject(index - 1));