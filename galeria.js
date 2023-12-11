let currentIndex = 0;
    const cardContainer = document.getElementById('cardContainer');
    const cards = document.querySelectorAll('.card');

    function showSlide(index) {
      currentIndex = index;
      const translateValue = -currentIndex * (300 + 15);
      cardContainer.style.transform = `translateX(${translateValue}px)`;
    }

    function nextSlide() {
      if (currentIndex < cards.length - 1) {
        showSlide(currentIndex + 1);
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        showSlide(currentIndex - 1);
      }
    }