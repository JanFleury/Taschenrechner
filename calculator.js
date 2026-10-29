// Rechenlogik, unabhängig von der Oberfläche.
class Calculator {
  constructor() { this.clear(); }
  clear() { this.value = '0'; this.stored = null; this.operation = null; this.fresh = true; this.expression = ''; this.error = false; }
  number() { return Number(this.value); }
  input(digit) {
    if (this.error) this.clear();
    if (this.fresh) { this.value = digit; this.fresh = false; }
    else if (this.value.replace(/[-.]/g, '').length < 12) this.value = this.value === '0' ? digit : this.value + digit;
  }
  decimal() {
    if (this.error) this.clear();
    if (this.fresh) { this.value = '0'; this.fresh = false; }
    if (!this.value.includes('.')) this.value += '.';
  }
  backspace() {
    if (this.error) { this.clear(); return; }
    if (this.fresh) return;
    this.value = this.value.slice(0, -1);
    if (this.value === '' || this.value === '-') this.value = '0';
  }
  sign() {
    if (this.error) return;
    this.value = this.value.startsWith('-') ? this.value.slice(1) : (this.number() === 0 ? this.value : '-' + this.value);
  }
  percent() {
    if (!this.error) this.setResult(this.number() / 100);
  }
  setResult(value) {
    if (!Number.isFinite(value)) {
      this.value = 'Fehler'; this.error = true; this.stored = null; this.operation = null; this.fresh = true;
      return;
    }
    this.value = String(Number(value.toPrecision(12)));
  }
  calculate(left, right, op) {
    switch (op) {
      case '+': return left + right;
      case '-': return left - right;
      case '*': return left * right;
      case '/': return right === 0 ? NaN : left / right;
    }
  }
  choose(op) {
    if (this.error) return;
    if (this.operation && !this.fresh) this.equals();
    if (this.error) return;
    this.stored = this.number(); this.operation = op; this.fresh = true;
    this.expression = this.value + ' ' + Calculator.symbol(op);
  }
  equals() {
    if (!this.operation || this.error || this.fresh) return;
    const right = this.number();
    this.expression = this.stored + ' ' + Calculator.symbol(this.operation) + ' ' + this.value + ' =';
    this.setResult(this.calculate(this.stored, right, this.operation));
    if (this.error) this.expression = 'Nicht berechenbar (z. B. Division durch 0)';
    this.operation = null; this.stored = null; this.fresh = true;
  }
  static symbol(op) { return ({ '*': '×', '/': '÷', '-': '−', '+': '+' })[op]; }
}
if (typeof module !== 'undefined') module.exports = Calculator;
