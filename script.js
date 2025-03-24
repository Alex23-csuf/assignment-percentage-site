function calculate() {
    const score = parseFloat(document.getElementById("score").value);
    const total = parseFloat(document.getElementById("total").value);
    const result = document.getElementById("result");
  
    if (isNaN(score) || isNaN(total) || total === 0) {
      result.textContent = "Please enter valid numbers for both fields.";
      return;
    }
  
    const percentage = (score / total) * 100;
    result.innerHTML = `
      <p>You received <strong>${percentage.toFixed(2)}%</strong> on your assignment!</p>
    `;
  }
  