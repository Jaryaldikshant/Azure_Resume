document.addEventListener('DOMContentLoaded', function() {
    // Get all skill cards
    const cards = document.querySelectorAll('.skill-card');
    let currentlyFlippedCard = null;

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // If there's a currently flipped card and it's not this one, flip it back
            if (currentlyFlippedCard && currentlyFlippedCard !== this) {
                currentlyFlippedCard.classList.remove('flipped');
            }

            // Toggle the current card
            this.classList.toggle('flipped');
            
            // Update the currently flipped card
            if (this.classList.contains('flipped')) {
                currentlyFlippedCard = this;
            } else {
                currentlyFlippedCard = null;
            }
        });
    });
}); 