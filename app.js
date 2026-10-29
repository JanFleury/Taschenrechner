const calculator = new Calculator();
const result = document.querySelector('#result');
const expression = document.querySelector('#expression');

function render() {
  result.textContent = calculator.value.replace('.', ',');
  expression.textContent = calculator.expression.replaceAll('.', ',') || 'Bereit für deine Rechnung';
  document.querySelectorAll('[data-operation]').forEach(button => {
    button.classList.toggle('selected', button.dataset.operation === calculator.operation);
  });
}

function act(action) {
  calculator[action]();
  render();
}

document.querySelector('.keys').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.digit !== undefined) calculator.input(button.dataset.digit);
  else if (button.dataset.operation) calculator.choose(button.dataset.operation);
  else calculator[button.dataset.action]();
  render();
});

document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  // Enter auf einem fokussierten Button soll diesen regulär auslösen.
  if (event.key === 'Enter' && event.target instanceof HTMLButtonElement) return;
  if (/^[0-9]$/.test(event.key)) calculator.input(event.key);
  else if (['+', '-', '*', '/'].includes(event.key)) calculator.choose(event.key);
  else {
    const actions = { Enter: 'equals', '=': 'equals', Escape: 'clear', Delete: 'clear', Backspace: 'backspace', ',': 'decimal', '.': 'decimal', '%': 'percent' };
    if (!actions[event.key]) return;
    event.preventDefault();
    act(actions[event.key]);
    return;
  }
  event.preventDefault();
  render();
});
render();
