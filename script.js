const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const contactModal = document.querySelector('.contact-modal');
const contactForm = document.querySelector('.message-form');
const openContactButtons = document.querySelectorAll('[data-contact-open]');
const closeContactButtons = document.querySelectorAll('[data-contact-close]');

const openContactForm = () => {
  contactModal.classList.add('is-open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  contactModal.querySelector('input')?.focus();
};

const closeContactForm = () => {
  contactModal.classList.remove('is-open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

openContactButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openContactForm();
  });
});

closeContactButtons.forEach((button) => {
  button.addEventListener('click', closeContactForm);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && contactModal.classList.contains('is-open')) closeContactForm();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const submitButton = contactForm.querySelector('.form-send');
  const status = contactForm.querySelector('.form-status');
  const payload = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    subject: String(formData.get('subject') || 'Portfolio inquiry').trim(),
    message: String(formData.get('message') || '').trim()
  };

  submitButton.disabled = true;
  status.classList.remove('is-error');
  status.textContent = 'Sending message...';

  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(async (response) => {
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Message could not be sent.');
      status.textContent = 'Message sent. I will get back to you soon.';
      contactForm.reset();
    })
    .catch((error) => {
      status.classList.add('is-error');
      status.textContent = error.message;
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
