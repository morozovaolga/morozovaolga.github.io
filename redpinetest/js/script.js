

'use strict'
var calc = document.getElementById('calc');
calc.onclick = function () {
	var myform = document.getElementsByTagName('form'),
		companion = 0,
		sporty = 0,
		guard = 0,
		universal = 0;
	/*Где вы планируете держать собаку*/
	if (myform.place.value === 'В квартире') {
		companion += 1;
	}
	if (myform.place.value === 'В будке') {
		guard += 1;
	}
	if (myform.place.value === 'В доме') {
		universal += 1;
	}
	if (myform.place.value === 'В вольере') {
		universal += 1;
	}
	/*Для каких целей вам нужна собака*/
	if (myform.target.value === 'Для удовольствия') {
		companion += 1;
	}
	if (myform.target.value === 'Для охраны') {
		guard += 7;
	}
	if (myform.target.value === 'Для занятий спортом') {
		sporty += 10;
	}
	if (myform.target.value === 'Для прогулок') {
		universal += 1;
	}
	/*Насколько вы активны*/
	if (myform.active.value === 'Много') {
		sporty += 1;
	}
	if (myform.active.value === 'Мало') {
		companion += 1;
	}
	if (myform.active.value === 'Умеренно') {
		companion += 1;
	}
	if (myform.active.value === 'Очень мало') {
		universal += 1;
	}
	/*Планируете ли вы дрессировать собаку*/
	if (myform.training.value === 'УГС') {
		companion += 1;
	}
	if (myform.training.value === 'ЗКС') {
		guard += 1;
	}
	if (myform.training.value === 'ЕС') {
		sporty += 1;
	}
	if (myform.training.value === 'Нет') {
		universal += 1;
	}
	/*Насколько для вас важен размер собаки*/
	if (myform.size.value === 'Неважно') {
		companion += 1;
	}
	if (myform.size.value === 'Большие') {
		guard += 1;
	}
	if (myform.size.value === 'Маленькие') {
		universal += 1;
	}
	if (myform.size.value === 'Неважно') {
		universal += 1;
	}
	/*Есть ли у вас дети*/
	if (myform.kids.value === 'Взрослые дети') {
		companion += 1;
	}
	if (myform.kids.value === 'Маленькие дети') {
		universal += 1;
	}
	if (myform.kids.value === 'Планирование') {
		universal += 1;
	}
	if (myform.kids.value === 'Чайлдфри') {
		sporty += 1;
	}


	var resultArr = [companion, sporty, guard, universal, 5];
	if (Math.max.apply(Math, resultArr) === sporty) {
		alert("Вам подойдет активная, спортивная собака");
	}
	if (Math.max.apply(Math, resultArr) === guard) {
		alert("Вам подойдет собака-охранник");
	}
	if (Math.max.apply(Math, resultArr) === companion) {
		alert("Вам подойдет собака-компаньон");
	}
	if (Math.max.apply(Math, resultArr) === universal) {
		alert("Вам подойдет собака-друг, ласковый и преданный пес с любящим сердцем");
	}
	if (Math.max.apply(Math, resultArr) < 5) {
		alert("Ответьте на все вопросы");
	}
};

