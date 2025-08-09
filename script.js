document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const colorInfo = document.getElementById('colorInfo');
    const colors = [
        '#FFD700', // Gold
        '#B8860B', // Dark Goldenrod
        '#C0C0C0', // Silver
        '#8B4513', // Saddle Brown
        '#2E4053', // Dark Blue Gray
        '#1ABC9C', // Turquoise
        '#E5E8E8', // Platinum
        '#F5F5DC'  // Beige
    ];

    colorButton.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
        colorInfo.textContent = `Background color changed to: ${randomColor}`;
    });
});
