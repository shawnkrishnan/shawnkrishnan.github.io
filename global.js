document.addEventListener('DOMContentLoaded', () => {
    console.log('global.js: DOMContentLoaded');
  
    // ====== NAVIGATION TOGGLE & HEADER SCROLL ======
    const menuBtn = document.getElementById('menu');
    const nav     = document.getElementById('header-nav');
    console.log('menuBtn =', menuBtn, 'nav =', nav);
  
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent the document click handler from immediately closing it
        console.log('hamburger clicked');
        nav.classList.toggle('open');
        console.log('nav classes:', nav.className);
      });
    }
  
    // close the mobile nav if you click anywhere outside the nav or hamburger
    document.addEventListener('click', (e) => {
      const isClickOnHamburger  = menuBtn.contains(e.target);
  
      if (nav.classList.contains('open') && !isClickInsideNav && !isClickOnHamburger) {
        console.log('click outside, closing nav');
        nav.classList.remove('open');
      }
    });
  
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (!header) return;
      const scrolled = window.scrollY > 50;
      header.classList.toggle('scrolled', scrolled);
    });
  
  
    // ====== PDF.JS RESUME RENDER ======
    const pdfCanvas = document.getElementById('pdf-render');
    console.log('pdfCanvas =', pdfCanvas);
    if (pdfCanvas && window['pdfjs-dist/build/pdf']) {
      const url = 'ShawnKrishnanResume.pdf';
      const pdfjsLib = window['pdfjs-dist/build/pdf'];
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';
  
      const ctx   = pdfCanvas.getContext('2d');
      const scale = 2.0;
  
      pdfjsLib.getDocument(url).promise.then(doc =>
        doc.getPage(1).then(page => {
          const viewport = page.getViewport({ scale });
          pdfCanvas.width  = viewport.width;
          pdfCanvas.height = viewport.height;
          page.render({ canvasContext: ctx, viewport });
        })
      );
    }
  
  
    // ====== PROJECT CARD “MORE/LESS INFO” TOGGLE ======
    const toggles = document.querySelectorAll('.toggle-more');
    console.log('toggle-more buttons =', toggles.length);
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const card    = btn.closest('.project-card');
        const summary = card.querySelector('.summary');
        const img     = card.querySelector('img');
        const open    = summary.classList.toggle('active');
  
        btn.textContent = open ? 'Less info' : 'More info';
        if (img) img.style.width = open ? '100%' : '150px';
      });
    });
  });
  