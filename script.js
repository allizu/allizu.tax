function calculateTax() {
  let income = parseFloat(document.getElementById('income').value);
  let result = document.getElementById('result');
  let tax;

  if (isNaN(income) || income <= 0) {
    result.textContent = 'Please enter a valid income!';
    return;
  }

  // Tax Brackets (sample example for progressive tax rates)
  if (income <= 10000) {
    tax = income * 0.1
