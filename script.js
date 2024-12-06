function calculateTax() {
  let income = document.getElementById('income').value;
  let result = document.getElementById('result');
  
  // Check if the income is valid
  if (income === '' || isNaN(income) || income <= 0) {
    result.textContent = 'Please enter a valid income.';
    return;
  }

  let tax;

  // Tax brackets for the Philippines
  if (income <= 250000) {
    tax = 0; // 0% tax for income <= 250,000
  } else if (income <= 400000) {
    tax = (income - 250000) * 0.2; // 20% tax for income between 250,001 and 400,000
  } else if (income <= 800000) {
    tax = 30000 + (income - 400000) * 0.25; // 25% tax for income between 400,001 and 800,000
  } else if (income <= 2000000) {
    tax = 130000 + (income - 800000) * 0.3; // 30% tax for income between 800,001 and 2,000,000
  } else if (income <= 8000000) {
    tax = 470000 + (income - 2000000) * 0.32; // 32% tax for income between 2,000,001 and 8,000,000
  } else {
    tax = 2220000 + (income - 8000000) * 0.35; // 35% tax for income above 8,000,000
  }

  result.textContent = `Your income tax is: PHP ${tax.toFixed(2)}`;
}
