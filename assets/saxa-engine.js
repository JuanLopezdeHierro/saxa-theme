document.addEventListener('DOMContentLoaded', () => {
  // SAXA Animation Engine
  // Tech Noir / Industrial Reveal Effect

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Select elements to animate
  // We dynamically add the class to key elements if they don't have it
  const elementsToAnimate = document.querySelectorAll('.card, .collection-product, .highlight, .header__title, h1, h2, .button');
  
  elementsToAnimate.forEach(el => {
    el.classList.add('saxa-reveal');
    observer.observe(el);
  });

  console.log('SAXA Engine: Initialized. Watching ' + elementsToAnimate.length + ' elements.');
});
