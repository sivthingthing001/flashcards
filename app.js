// Track the currently open flashcard
let currentOpenFlashcard = null;

// Handle view detail button clicks
document.querySelectorAll('.view-detail').forEach(button => {
    button.addEventListener('click', function() {
        const flashcard = this.closest('.flashcard');

        // If there's already an open flashcard, close it
        if (currentOpenFlashcard && currentOpenFlashcard !== flashcard) {
            currentOpenFlashcard.classList.remove('flipped');
            setTimeout(() => {
                currentOpenFlashcard.classList.remove('detailed-view');
            }, 600); 
        }
        
        // Open the clicked flashcard
        flashcard.classList.add('detailed-view'); 
        flashcard.classList.add('flipped');
        document.getElementById('blur-overlay').style.display = 'block';
        
        // Update the currently open flashcard
        currentOpenFlashcard = flashcard;
    });
});

// Handle close button clicks
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', function() {
        const flashcard = this.closest('.flashcard');
        flashcard.classList.remove('flipped');
        
        setTimeout(() => {
            flashcard.classList.remove('detailed-view');
            document.getElementById('blur-overlay').style.display = 'none';
            
            // Clear the currently open flashcard if it's the one being closed
            if (currentOpenFlashcard === flashcard) {
                currentOpenFlashcard = null;
            }
        }, 600); 
    });
});

// Handle search input
document.querySelector('.search-box input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    console.log('Search Term:', searchTerm);
    const flashcards = document.querySelectorAll('.flashcard');
    
    flashcards.forEach(flashcard => {
        const question = flashcard.querySelector('.flashcard-front h3').textContent.toLowerCase();
        console.log('Question:', question);
        
        if (question.includes(searchTerm)) {
            flashcard.style.display = 'block';
        } else {
            flashcard.style.display = 'none';
        }
    });
});
