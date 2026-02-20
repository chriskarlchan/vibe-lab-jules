document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-color-btn');
    const messageElement = document.getElementById('vibe-message');
    const counterElement = document.querySelector('#counter span');

    let count = 0;

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

    const messages = [
        "You're doing great!",
        "Awesome energy!",
        "Keep it up!",
        "Radiate positivity!",
        "Stay awesome!",
        "Good vibes only!",
        "You got this!",
        "Shine bright!",
        "Believe in yourself!",
        "Make it happen!"
    ];

    button.addEventListener('click', (e) => {
        // 1. Change Background Color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;

        // 2. Update Message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;

        // Add pop animation class and remove it after animation ends
        messageElement.classList.remove('pop');
        void messageElement.offsetWidth; // Trigger reflow
        messageElement.classList.add('pop');

        // 3. Update Counter
        count++;
        counterElement.textContent = count;

        // Add pop animation to counter too
        counterElement.classList.remove('pop');
        void counterElement.offsetWidth;
        counterElement.classList.add('pop');

        // 4. Confetti Effect
        createConfetti(e.clientX, e.clientY);
    });

    function createConfetti(x, y) {
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Randomize color
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            // Randomize position slightly around the click
            const spread = 50;
            const startX = x + (Math.random() - 0.5) * spread;
            const startY = y + (Math.random() - 0.5) * spread;

            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;

            // Randomize fall animation duration and delay
            const duration = 0.5 + Math.random() * 1; // 0.5s to 1.5s
            confetti.style.animationDuration = `${duration}s`;

            // Randomize horizontal drift
            const drift = (Math.random() - 0.5) * 200; // -100px to 100px
            confetti.style.setProperty('--drift', `${drift}px`);

            // We need to inject the drift into the keyframes or transform directly.
            // Since keyframes are static in CSS, let's use a transform transition or just simpler physics.
            // Actually, for simple confetti, just falling is okay, but adding a random rotation and X drift makes it better.
            // Let's just set a random rotation end state in the style if possible, but 'animation' overrides transform.
            // A simple trick: set a variable for the X translation in the keyframe? No, standard CSS keyframes don't verify vars easily in all browsers without setup.
            // Let's just stick to the CSS animation 'fall' which goes straight down,
            // but we can rotate the element initially.
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(confetti);

            // Cleanup
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
});
