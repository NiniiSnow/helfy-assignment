import { Card } from '../card/card.js';
import { REVIEWS } from '../../data/card.js';

export function Carousel() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./carousel.css', import.meta.url);
    document.head.appendChild(link);

    const reviews = REVIEWS;

    return `
    <section class="carousel">
      <h2><span class="highlight">Mehr als 750,000 </span> zufriedene Patienten</h2>
      <div class="carousel-main">
        <div class="carousel-content">
          ${reviews.map(review => Card(review)).join('')}
        </div>
      </div>
      <div class="carousel-actions">
        <button class="carousel-arrow carousel-arrow-prev" aria-label="Previous review">
            <img src="/assets/images/arrow-left.svg" alt="Previous review Desktop" class="carousel-arrow-desktop">
            <img src="/assets/images/arrow-left-mobile.svg" alt="Previous review Mobile" class="carousel-arrow-mobile">
        </button>
        <div class="carousel-dots">
            ${reviews.map((_, index) => `<button class="carousel-dot${index === 0 ? ' active' : ''}" data-index="${index}" aria-label="Go to review ${index + 1}"></button>`).join('')}
        </div>
        <button class="carousel-arrow carousel-arrow-next" aria-label="Next review">
            <img src="/assets/images/arrow-right.svg" alt="Next review Desktop" class="carousel-arrow-desktop">
            <img src="/assets/images/arrow-right-mobile.svg" alt="Next review Mobile" class="carousel-arrow-mobile">
        </button>
      </div>
    </section>
  `;
}

export function initCarousel() {
    const section = document.querySelector('.carousel');
    if (!section) return;

    const track = section.querySelector('.carousel-content');
    const prevBtn = section.querySelector('.carousel-arrow-prev');
    const nextBtn = section.querySelector('.carousel-arrow-next');
    const dots = [...section.querySelectorAll('.carousel-dot')];
    const cards = [...track.children];

    function scrollToIndex(index) {
        cards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }

    function getActiveIndex() {
        return dots.findIndex(dot => dot.classList.contains('active'));
    }

    function updateActiveDot() {
        const trackLeft = track.getBoundingClientRect().left;
        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        dots.forEach((dot, index) => dot.classList.toggle('active', index === closestIndex));
    }

    prevBtn.addEventListener('click', () => scrollToIndex(Math.max(0, getActiveIndex() - 1)));
    nextBtn.addEventListener('click', () => scrollToIndex(Math.min(cards.length - 1, getActiveIndex() + 1)));

    dots.forEach(dot => {
        dot.addEventListener('click', () => scrollToIndex(Number(dot.dataset.index)));
    });

    let scrollTimeout;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveDot, 100);
    });
}