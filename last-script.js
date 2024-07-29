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

// No button movement
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const buttonContainer = document.querySelector('.last-button-container');

function moveButton() {
    const containerRect = buttonContainer.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    let newX, newY;
    let overlap;

    do {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
        
        overlap = !(newX + buttonRect.width < yesButtonRect.left || 
                    newX > yesButtonRect.left + yesButtonRect.width ||
                    newY + buttonRect.height < yesButtonRect.top ||
                    newY > yesButtonRect.top + yesButtonRect.height);
                    
    } while (overlap);

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('click', moveButton);
noButton.addEventListener('touchstart', moveButton);

