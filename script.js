

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

// automatically playing the song
const shouldPlayAudio = true;

        // Get the image and audio elements
        const img = document.getElementById('myImage');
        const audio = document.getElementById('background-audio');

        // Set the image source to trigger the load event
        img.src = 'big size.jpg';
        img.style.display = 'block'; // Make the image visible

        // Add an event listener for the image load event
        img.addEventListener('load', function() {
            if (shouldPlayAudio) {
                // Play the audio when the image is fully loaded
                audio.play().catch(function(error) {
                    console.log('Autoplay was prevented:', error);
                });
            }
        });
        
if(shouldPlayAudio){
    audioElement.play();
}

