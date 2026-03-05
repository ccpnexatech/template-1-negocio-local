const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const fadeElements = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach((element) => observer.observe(element));
} else {
  fadeElements.forEach((element) => element.classList.add('visible'));
}

const whatsappForm = document.getElementById('whatsapp-form');
const phoneNumber = '5500000000000';
const defaultMessage = 'Olá! Vi seu site e gostaria de mais informações sobre os serviços.';

if (whatsappForm) {
  whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(whatsappForm);
    const name = (formData.get('name') || '').toString().trim();
    const service = (formData.get('service') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const fullMessage = [
      defaultMessage,
      name ? `Nome: ${name}` : '',
      service ? `Serviço: ${service}` : '',
      message ? `Detalhes: ${message}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}
