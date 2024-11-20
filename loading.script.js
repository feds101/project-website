document.addEventListener("DOMContentLoaded", () => {
    const homeIcon = document.querySelector('.fa-home'); // Select the home icon
    const overlay = document.getElementById('loading-overlay'); // Select the overlay

    homeIcon.parentElement.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        // Show the overlay and spinner
        overlay.style.display = 'flex'; // Make the overlay visible

        // Simulate a short delay before reloading
        setTimeout(() => {
            window.location.reload(); // Reload the page
        }, 1000); // Adjust delay as needed (3000ms = 3 seconds)
    });
});
