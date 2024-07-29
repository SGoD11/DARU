

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

//no button movement
const noButton = document.getElementById('noLast');
const buttonContainer = document.querySelector('.new-button-container');

function moveButton() {
    const containerRect = buttonContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    let newX, newY;

    do {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    } while (Math.abs(newX - buttonRect.left) < 50 && Math.abs(newY - buttonRect.top) < 50);

    console.log(`Moving to (${newX}px, ${newY}px)`); // Debugging line
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('click', moveButton);
noButton.addEventListener('touchstart', moveButton);



function yes(){
    window.location.href = '/html/yes.html';
}

function page2(){
    window.location.href = '/html/page2.html';
}

function page3(){
    window.location.href = '/html/page3.html';
}

function last(){
    window.location.href = '/html/last.html';
}