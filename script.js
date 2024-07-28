

// for footer time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();


//for the no button
const noButton = document.getElementById('noLast');
const buttonContainer = document.querySelector('.button-container');

function moveButton() {
    const containerRect = buttonContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    let newX, newY;

    do {
        newX = Math.random() * maxX *2;
        newY = Math.random() * maxY *2;
    } while (Math.abs(newX - buttonRect.left) < 50 && Math.abs(newY - buttonRect.top) < 50);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton);

const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', () => {
    window.location.href = '/html/last.html';
});

function yes(){
    window.location.href = '/html/last.html';
}