
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }

    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert("Viewing source is disabled.");
    }
});

(function detectDevTools() {
    const threshold = 160;
    setInterval(function () {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            alert("Developer tools are open. Please close them.");
            // Optional: Redirect or take other actions
            window.location.href = 'about:blank';
        }
    }, 1000);
})();


