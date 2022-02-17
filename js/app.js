function getInputValue(inputId) {
	const inputValue = document.getElementById(inputId).value;
	const convertedValue = parseFloat(inputValue);
	return convertedValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
	const income = getInputValue('income-field');
	const food = getInputValue('food-field');
	const rent = getInputValue('rent-field');
	const clothes = getInputValue('clothes-field');
	const totalExpense = document.getElementById('total-expense');
	const balance = document.getElementById('balance');
	const totalCost = food + rent + clothes;
	totalExpense.innerText = totalCost;
	balance.innerText = income - totalCost;
});
