export function Footer() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./footer.css', import.meta.url);
    document.head.appendChild(link);

    const socialIcons = [
        { name: 'Facebook', url: '/assets/images/facebook-icon.svg' },
        { name: 'LinkedIn', url: '/assets/images/linkedin-icon.svg' },
        { name: 'YouTube', url: '/assets/images/youtube-icon.svg' },
        { name: 'Twitter', url: '/assets/images/twitter-icon.svg' },
        { name: 'Instagram', url: '/assets/images/instagram-icon.svg' },
    ]

    return `
    <footer class="footer">
        <div class="footer-header">
            <img src="/assets/images/main-logo.svg" alt="Logo">
            <div class="footer-social-icons">
                ${socialIcons.map(icon => `
                    <a href="#"><img src="${icon.url}" alt="${icon.name}"></a>
                `).join('')}
            </div>
        </div>
    </footer>
  `;
}