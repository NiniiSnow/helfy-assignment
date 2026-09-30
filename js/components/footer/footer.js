import { FOOTER_SOCIAL_ICONS, FOOTER_PARTNER_ICONS } from '../../utils/footer.constants.js';

export function Footer() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./footer.css', import.meta.url);
    document.head.appendChild(link);

    const socialIcons = FOOTER_SOCIAL_ICONS;
    const companyIcons = FOOTER_PARTNER_ICONS;

    return `
    <footer class="footer">
        <div class="footer-header">
            <img src="/assets/images/main-logo-dark.svg" alt="Logo" class="footer-logo">
            <div class="footer-links">
                    ${socialIcons.map(icon => `
                        <a href="${icon.url}"><img src="${icon.imageUrl}" alt="${icon.name}"></a>
                    `).join('')}
            </div>
        </div>
        <div class="footer-content">
            <div class="footer-icons"> 
                ${companyIcons.map(icon => `
                    <a href="${icon.url}"><img src="${icon.imageUrl}" class="partner-icon" alt="${icon.name}"></a>
                `).join('')}
            </div>
            <div class="footer-description">
                <div class="footer-description-text">
                    <p>Die Verschreibung von Medikamenten liegt ausschließlich im Ermessen des Arztes.</p>
                    <p>Wenn Sie während des Bestellvorgangs die Option zur Medikamentenlieferung wählen, leiten wir Ihr Rezept automatisch an eine von uns empfohlene Versandapotheke weiter. Diese gibt das Medikament ab und versendet es versandkostenfrei per UPS/DHL.</p>
                    <p>Alternativ können Sie sich ausschließlich das Rezept per Post zusenden lassen und es anschließend in einer Apotheke Ihrer Wahl einlösen.</p>
                </div>
                <p class="footer-copyright">2026 © DoktorABC All rights reserved</p>
            </div>
        </div>
    </footer>
  `;
}