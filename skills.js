

  const catButtons = document.querySelectorAll('.cat-btn');
  const modules = document.querySelectorAll('#modulesGrid .module-card');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      modules.forEach(m => {
        m.style.display = (m.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
