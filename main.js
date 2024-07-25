document.addEventListener('DOMContentLoaded', () => {
    function playGame(gameId) {
        // Implement game loading logic here
        alert(`Loading ${gameId}`);
    }

    window.playGame = playGame;

    const sequence = ['letterA', 'letterR', 'letterG'];
    let currentStep = 0;

    sequence.forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            if (sequence[currentStep] === id) {
                document.getElementById(id).classList.add('clicked');
                currentStep++;
                if (currentStep === sequence.length) {
                    window.location.href = 'newpage.html'; // Redirect to the new page
                }
            } else {
                currentStep = 0; // Reset if the sequence is broken
                document.querySelectorAll('.arg').forEach(el => el.classList.remove('clicked'));
            }
        });
    });
});