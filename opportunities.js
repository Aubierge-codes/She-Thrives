
  // Lightweight client-side filter for the opportunity cards
  const searchInput = document.querySelector('.search-opps input');
  const cards = Array.from(document.querySelectorAll('.card-grid .card'));
  const emptyState = document.getElementById('emptyState');
  const grid = document.querySelector('.card-grid');

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = text.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    grid.style.display = visibleCount === 0 ? 'none' : 'grid';
  });

  // Bookmark toggle affordance
  document.querySelectorAll('.icon-btn, .icon-btn-sm').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.background = btn.style.background === 'rgb(17, 18, 20)' ? '#fff' : '#111214';
      const svg = btn.querySelector('svg');
      if (svg) svg.style.stroke = svg.style.stroke === 'white' ? 'currentColor' : 'white';
    });
  });
