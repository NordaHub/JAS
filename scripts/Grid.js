document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.explore__prev');
    const nextBtn = document.querySelector('.explore__next');
    const grid = document.querySelector('.explore__grid');
    const cards = document.querySelectorAll('.explore__card');
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
    const visibleCards = Math.floor(grid.offsetWidth / cardWidth); // Adjust visible cards dynamically
    const totalCards = cards.length;
    let currentIndex = 0;

    function slideLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCardPositions();
      }
    }

    function slideRight() {
      if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateCardPositions();
      }
    }

    function updateCardPositions() {
      cards.forEach((card, index) => {
        const newPosition = index - currentIndex;
        card.style.transform = `translateX(${(cardWidth * newPosition)}px)`; // Adjust translation calculation
      });
    }

    prevBtn.addEventListener('click', slideLeft);
    nextBtn.addEventListener('click', slideRight);
  
    // Call updateCardPositions initially
    updateCardPositions();
});