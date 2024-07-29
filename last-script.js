document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const buttonContainer = document.querySelector('.last-button-container');

    // Function to move the No button
    function moveButton() {
        const containerRect = buttonContainer.getBoundingClientRect();
        const yesButtonRect = yesButton.getBoundingClientRect();
        const maxX = containerRect.width - noButton.offsetWidth;
        const maxY = containerRect.height - noButton.offsetHeight;

        let newX, newY, overlap;

        do {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;

            // Check if the new position overlaps with the Yes button
            overlap = !(newX + noButton.offsetWidth < yesButtonRect.left ||
                        newX > yesButtonRect.left + yesButtonRect.width ||
                        newY + noButton.offsetHeight < yesButtonRect.top ||
                        newY > yesButtonRect.top + yesButtonRect.height);

        } while (overlap);

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    // Initially position the No button to avoid overlap
    moveButton();

    // Add event listeners to move the No button on hover or click
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);
    noButton.addEventListener('touchstart', moveButton);

    // Time update function
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
});
