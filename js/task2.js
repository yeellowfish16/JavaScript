document.getElementById('check').onclick = function() {
	calculateSecInHour(alert(calculateSecInHour(1)));
};

// Функция, считающая количество секунд в часе
// @param numHours - количество часов, в которых нужно посчитать секунды

function calculateSecInHour (numHours) {
	return 'В ' + numHours + ' часе ' + 60*60*numHours + ' секунд';
}
