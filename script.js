document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-color-btn');
    // Modern flat design palette
    const colors = [
        '#64748b', // Slate
        '#ef4444', // Red
        '#f97316', // Orange
        '#f59e0b', // Amber
        '#84cc16', // Lime
        '#10b981', // Emerald
        '#06b6d4', // Cyan
        '#3b82f6', // Blue
        '#6366f1', // Indigo
        '#8b5cf6', // Violet
        '#d946ef', // Fuchsia
        '#ec4899', // Pink
        '#f43f5e'  // Rose
    ];

    button.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
