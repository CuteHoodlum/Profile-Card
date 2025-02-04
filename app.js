function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTimeUTC').textContent = `Current UTC Time: ${utcTime}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
