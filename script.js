document.addEventListener('DOMContentLoaded', () => {
    const greetingBox = document.querySelector('.greeting-box');
    const loveMessage = document.querySelector('.love-message');
    const heartContainer = document.querySelector('.heart-container');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const proposalButtons = document.querySelector('.proposal-buttons');
    const proposalMessage = document.querySelector('.proposal-message');
    const celebration = document.getElementById('celebration');
    const responseMessage = document.querySelector('.response-message');

    // Reveal love message with delay
    setTimeout(() => {
        loveMessage.style.opacity = '1';
        loveMessage.style.transform = 'scale(1)';
    }, 1500);

    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.animationDuration = Math.random() * 3 + 3 + 's';
                heartContainer.appendChild(heart);

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, i * 300);
        }
    }

    createHearts();
    
    // Create new hearts periodically
    setInterval(createHearts, 8000);

    // Add a little animation for the greeting box on load
    setTimeout(() => {
        greetingBox.style.transform = 'scale(1.05)';
        setTimeout(() => {
            greetingBox.style.transform = 'scale(1)';
        }, 200);
    }, 300);

    // Handle proposal response
    yesButton.addEventListener('click', () => {
        // Hide proposal elements
        proposalButtons.style.display = 'none';
        proposalMessage.style.display = 'none';

        // Show response with animation
        responseMessage.textContent = 'Que bom! Nika, agora somos namorados! ';
        responseMessage.style.display = 'block';
        
        setTimeout(() => {
            responseMessage.style.opacity = '1';
            responseMessage.style.transform = 'scale(1)';
        }, 100);

        // Create celebration effect
        celebration.style.display = 'block';
        createConfetti();

        // Create extra hearts
        for (let i = 0; i < 5; i++) {
            createHearts();
        }
    });

    // Make the No button run away from the cursor
    noButton.addEventListener('mouseover', (e) => {
        const btnWidth = noButton.offsetWidth;
        const btnHeight = noButton.offsetHeight;
        
        // Calculate new position ensuring button stays visible
        const maxX = window.innerWidth - btnWidth;
        const maxY = window.innerHeight - btnHeight;
        
        let x = Math.random() * maxX;
        let y = Math.random() * maxY;
        
        // Ensure position values are valid
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Create confetti for celebration
    function createConfetti() {
        const colors = ['#9c27b0', '#7b1fa2', '#6a1b9a', '#4a148c', '#e1bee7', '#d1c4e9', '#aa00ff', '#d500f9'];

        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s ease forwards`;
                celebration.appendChild(confetti);

                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 20);
        }
    }
});
