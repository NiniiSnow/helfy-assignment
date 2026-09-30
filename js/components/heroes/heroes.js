export function Heroes() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./heroes.css', import.meta.url);
    document.head.appendChild(link);

    const features = [
        'Schneller und <span class="highlight">diskreter Service</span>',
        'Rezept und  <span class="highlight">Behandlung online</span>',
        'Selbstabholung in <span class="highlight"> 600+ Apotheken</span>',
        'Expresslieferung <span class="highlight"> 60 Min</span> <span class="note"> *je nach Standort</span>'
    ];

    const ratingExample = {
        icon: '/assets/images/e-icon.svg',
        alt: 'Icon Example Rating',
        text: 'Käuferschutz',
        rating: 4.81,
    };

    const filledStars = Math.ceil(ratingExample.rating);
    const stars = Array.from({ length: filledStars }, (_, i) =>
        `<img src="/assets/images/star.svg" alt="Star ${i + 1}">`
    ).join('');

    return `
    <section class="heroes">
      <img src="/assets/images/white-male.png" alt="White Male" class="hero-image">
      <div class="hero-content">
        <h1 class="hero-title">Online-Arzt- und Apothekenservice</h1>
        <div class="hero-description-container">
          <p class="hero-description">Behandlungen online verschrieben und nach Hause geliefert</p>
          <ul class="hero-features">
            ${features.map(feature => `<li class="hero-feature">${feature}</li>`).join('')}
          </ul>
        </div>
        <button class="hero-button">Jetzt Rezept anfordern!</button>
        <div class="rating-example">
          <img src="${ratingExample.icon}" alt="${ratingExample.alt}" class="rating-icon">
          <div class="rating-text">
            <p>${ratingExample.text}
            <span>${stars}</span>
            </p>
            <div class="rating-value">
              ${ratingExample.rating} 
              <span>Sehr gut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroButton() {
    const button = document.querySelector('.hero-button');
    if (!button) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;

        button.classList.toggle('hero-button--hidden', scrollingDown && currentScrollY > 50);
        lastScrollY = currentScrollY;
    });
}