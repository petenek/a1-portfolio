const track = document.querySelector('.technologies-track');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const visible = 3;
const itemWidth = 88;
const GroupWidth = visible * itemWidth;
const totalGroups = Math.ceil(track.children.length / visible);

let currentGroup = 0;
let autoSwipeTimer;

function goToGroup(groupIndex) {
    currentGroup=groupIndex;
    const offset = -(currentGroup * GroupWidth);
    track.style.transform = `translateX(${offset}px)`;
}

function nextGroup() {
    goToGroup((currentGroup + 1) % totalGroups);
}

function prevGroup() {
    goToGroup((currentGroup - 1 + totalGroups) % totalGroups);
}

leftArrow.addEventListener('click', () => {
    prevGroup();
    resetAutoSwipe();
});

rightArrow.addEventListener('click', () => {
    nextGroup();
    resetAutoSwipe();
});

function startAutoSwipe() {
    autoSwipeTimer = setInterval(nextGroup, 3000);
}

function resetAutoSwipe() {
    clearInterval(autoSwipeTimer);
    startAutoSwipe();
}

startAutoSwipe();