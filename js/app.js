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
