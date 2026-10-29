// Gespeichertes Design schon vor dem Aufbau der Oberfläche anwenden.
(() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('calculator-theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch { /* Speicherung kann vom Browser blockiert sein. */ }
  document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#theme-toggle');
    function updateButton() {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      const label = dark ? 'Hellmodus aktivieren' : 'Dunkelmodus aktivieren';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
    button.addEventListener('click', () => {
      theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem('calculator-theme', theme); } catch { /* Optional. */ }
      updateButton();
    });
    updateButton();
  });
})();
