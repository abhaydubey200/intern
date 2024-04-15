const taxForm = document.getElementById('taxForm'); // Assuming taxForm is the ID of your form element
const resultModal = document.getElementById('resultModal'); // Assuming resultModal is the ID of your modal element

taxForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const grossAnnualIncome = parseFloat(document.getElementById('grossAnnualIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const age = document.getElementById('age').value;

    // Validate input
    if (isNaN(grossAnnualIncome) || isNaN(extraIncome) || isNaN(deductions) || age === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Calculate overall income
    const overallIncome = grossAnnualIncome + extraIncome - deductions;
    let tax = 0;

    // Calculate tax based on overall income and age
    if (overallIncome > 800000) {
        if (age === 'lessThan40') {
            tax = 0.3 * (overallIncome - 800000);
        } else if (age === 'greaterThan40LessThan60') {
            tax = 0.4 * (overallIncome - 800000);
        } else if (age === 'greaterThan60') {
            tax = 0.1 * (overallIncome - 800000);
        }
    }

    // Prepare result text
    const resultText = `Overall income: ${overallIncome.toLocaleString()}<br>Tax: ${tax.toLocaleString()}`;
    document.getElementById('resultText').innerHTML = resultText;

    // Show result modal
    resultModal.style.display = 'block';
});
