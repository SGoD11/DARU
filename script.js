

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