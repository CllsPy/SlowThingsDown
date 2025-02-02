let countdownInterval; // Variable to store the interval ID

function openFullscreen(img) {
    console.log("Opening fullscreen modal..."); // Debugging
    document.getElementById('fullscreenImage').src = img.src;

    const modalElement = document.getElementById('fullscreenModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Reset the timer display when the modal opens
    document.getElementById('timeRemaining').textContent = '0';
}

function startTimer() {
    const timerInput = document.getElementById('timer');
    const seconds = parseInt(timerInput.value);

    if (isNaN(seconds) || seconds < 1) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    console.log(`Timer set for ${seconds} seconds.`); // Debugging

    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let timeRemaining = seconds; // Initialize the remaining time

    // Update the timer display immediately
    document.getElementById('timeRemaining').textContent = timeRemaining;

    // Start the countdown
    countdownInterval = setInterval(() => {
        timeRemaining--; // Decrement the remaining time
        document.getElementById('timeRemaining').textContent = timeRemaining; // Update the display

        // If the timer reaches 0, stop the interval and close the modal
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval); // Stop the interval
            const modalElement = document.getElementById('fullscreenModal');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
                modal.hide(); // Hide the modal
            }
        }
    }, 1000); // Update every 1 second
}