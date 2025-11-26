
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');
    
    button.addEventListener('click', () => {
        // Remove animation class if it exists
        button.classList.remove('animate');
        
        // Trigger reflow to restart animation
        void button.offsetWidth;
        
        // Add animation class
        button.classList.add('animate');
        
        // Optional: Remove class after animation ends
        setTimeout(() => {
            button.classList.remove('animate');
        }, 1000);
    });
});