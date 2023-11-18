const game = document.getElementById('game');
const player = document.getElementById('player');

let playerX = 0;
let playerY = 0;
let isJumping = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        playerX += 5;
        player.style.left = playerX + 'px';
    } else if (event.key === 'ArrowLeft') {
        playerX -= 5;
        player.style.left = playerX + 'px';
    } else if (event.key === 'ArrowUp' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let jumpHeight = 100;
    let jumpDuration = 1000; // 1 second

    let startTime = Date.now();

    function animateJump() {
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;

        if (elapsedTime < jumpDuration) {
            playerY = jumpHeight * Math.sin((elapsedTime / jumpDuration) * (Math.PI / 2));
            player.style.bottom = playerY + 'px';
            requestAnimationFrame(animateJump);
        } else {
            playerY = 0;
            player.style.bottom = playerY + 'px';
            isJumping = false;
        }
    }

    requestAnimationFrame(animateJump);
}
