var date = '2025-12-31',
    dateArr = date.split('-');

dateArr.reverse();

var newDate = dateArr.join('/');

document.getElementById('check').onclick = function () {
    var newElem = document.createElement('p');
    document.getElementById('result').innerHTML = '';
    newElem.innerHTML = newDate;
    document.getElementById('result').appendChild(newElem);
};
