export function Header() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./header.css', import.meta.url);
    document.head.appendChild(link);

    return `
    <header class="header">
      <img src="/assets/images/main-logo.svg" alt="Logo">
    </header>
  `;
}