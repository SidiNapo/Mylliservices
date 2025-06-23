
// Critical CSS optimization utilities

export const inlineCriticalCSS = () => {
  const criticalCSS = `
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,system-ui,sans-serif;margin:0;padding:0;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeSpeed}
    .header-container{background:#fff;box-shadow:0 2px 10px rgba(0,0,0,0.1);position:fixed;top:0;left:0;right:0;z-index:1000;height:64px;contain:layout style paint}
    .hero-section{background:linear-gradient(135deg,#029edd 0%,#0077c0 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;contain:layout style paint}
    .btn-primary{background:#029edd;color:#fff;padding:0.75rem 1.5rem;border-radius:9999px;font-weight:500;border:none;cursor:pointer;transition:background-color 0.2s ease;contain:layout style}
    .btn-primary:hover{background:#0077c0}
    .brand-name{font-weight:700;white-space:nowrap;display:inline-block;contain:layout style}
    .brand-name .mylli-m{color:#029edd}
    .brand-name .mylli-y{color:#ff0707}
    .brand-name .mylli-lli{color:#029edd}
    .brand-name .services{color:#029edd}
    .container-custom{width:100%;max-width:1200px;margin:0 auto;padding:0 1rem;contain:layout}
    @media(min-width:640px){.container-custom{padding:0 2rem}}
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

export const deferNonCriticalCSS = () => {
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
  
  stylesheets.forEach((link) => {
    const linkElement = link as HTMLLinkElement;
    linkElement.media = 'print';
    linkElement.onload = () => {
      linkElement.media = 'all';
    };
  });
};

export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/lovable-uploads/554676d0-4988-4b83-864c-15c32ee349a2.png', as: 'image' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
};
