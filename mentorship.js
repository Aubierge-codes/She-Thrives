  const chips = document.querySelectorAll('#fieldFilters .chip');
  const mentors = document.querySelectorAll('#mentorGrid .mentor-card');
  const searchInput = document.getElementById('mentorSearch');
  let activeField = 'all';

  function applyFilters(){
    const q = searchInput.value.trim().toLowerCase();
    mentors.forEach(card => {
      const matchesField = activeField === 'all' || card.dataset.field === activeField;
      const matchesQuery = card.textContent.toLowerCase().includes(q);
      card.style.display = (matchesField && matchesQuery) ? '' : 'none';
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeField = chip.dataset.field;
      applyFilters();
    });
  });
  searchInput.addEventListener('input', applyFilters);
