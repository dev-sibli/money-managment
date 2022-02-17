// Input value function
function getInputValue(inputId) {
	const inputValue = document.getElementById(inputId).value;
	const convertedValue = parseFloat(inputValue);
	return convertedValue;
}
// Calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', function () {
	const income = getInputValue('income-field');
	const food = getInputValue('food-field');
	const rent = getInputValue('rent-field');
	const clothes = getInputValue('clothes-field');
	const totalExpense = document.getElementById('total-expense');
	const balance = document.getElementById('balance');

	//Calculate button Error handling
	if (income >= 0 && food >= 0 && rent >= 0 && clothes >= 0) {
		const totalCost = food + rent + clothes;
		if (income >= totalCost) {
			totalExpense.innerText = totalCost;
			balance.innerText = income - totalCost;
		} else {
			alert('Please spend less money than income');
		}
	} else {
		window.alert('Please Input positive number');
	}
});
//  Save button click handler
document.getElementById('save-btn').addEventListener('click', function () {
	const income = getInputValue('income-field');
	const balance = document.getElementById('balance');
	const savingsInput = getInputValue('savings-input');
	const savings = document.getElementById('savings-amount');
	const remainingBalance = document.getElementById('remaining-balance');
	const balanceText = balance.innerText;
	const balanceNumber = parseFloat(balanceText);
	const savingsAmount = (income / 100) * savingsInput;

	// Save button Error handling
	if (savingsInput >= 0) {
		if (savingsAmount <= balanceNumber) {
			savings.innerText = savingsAmount;
			remainingBalance.innerText = balanceNumber - savingsAmount;
		} else {
			alert('Please deposit less than the balance amount');
		}
	} else {
		alert('Please input a positive number');
	}
});
