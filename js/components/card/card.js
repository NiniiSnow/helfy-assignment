export function Card({ name, date, text, verified = true }) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./card.css', import.meta.url);
  document.head.appendChild(link);

  return `
    <div class="card">
        <div>
            <h3 class="card-name">${name}</h3>
            <p class="card-date">${date}</p>
        </div>
        <p class="card-text">${text}</p>
        <div class="card-dots">....</div>
      ${verified ? `
        <div class="card-verified">
          <img src="/assets/images/verification-icon.svg" alt="Verified" class="card-verified-icon">
          <span>Verifizierte Bewertung</span>
        </div>
      ` : ''}
    </div>
  `;
}
