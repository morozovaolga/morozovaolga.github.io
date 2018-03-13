function calc() {
    var myform = document.getElementsByTagName("form"),
        companion = 0,
        sporty = 0,
        guard = 0,
        universal = 0,
        resultArr = [companion, sporty, guard, universal, 5];
    (myform.place.value === 'В квартире') ? companion += 1 :
        (myform.target.value === 'Для удовольствия') ? companion += 1 :
        (myform.active.value === 'Умеренно') ? companion += 1 :
        (myform.active.value === 'Мало') ? companion += 1 :
        (myform.kids.value === 'Взрослые дети') ? companion += 1 :
        (myform.size.value === 'Неважно') ? companion += 1 :
        (myform.training.value === 'УГС') ? companion += 1 :

        (myform.place.value === 'В будке') ? guard += 1 :
        (myform.target.value === 'Для охраны') ? guard += 7 :
        (myform.training.value === 'ЗКС') ? guard += 1 :
        (myform.size.value === 'Большие') ? guard += 1 :

        (myform.place.value === 'В доме') ? universal += 1 :
        (myform.place.value === 'В вольере') ? universal += 1 :
        (myform.target.value === 'Для прогулок') ? universal += 1 :
        (myform.active.value === 'Очень мало') ? universal += 1 :
        (myform.size.value === 'Маленькие') ? universal += 1 :
        (myform.size.value === 'Неважно') ? universal += 1 :
        (myform.kids.value === 'Маленькие дети') ? universal += 1 :
        (myform.training.value === 'Нет') ? universal += 1 :
        (myform.kids.value === 'Планирование') ? universal += 1 :

        (myform.target.value === 'Для занятий спортом') ? sporty += 10 :
        (myform.active.value === 'Много') ? sporty += 1 :
        (myform.training.value === 'ЕС') ? sporty += 1 :
        (myform.kids.value === 'Чайлдфри') ? sporty += 1 :
        function getMaxValue(resultArr) {
            var max = resultArr[0]; // берем первый элемент массива
            for (var i = 0; i < resultArr.length; i++) {
                if (max < resultArr[i]) {
                    max = resultArr[i];
                }
                return max;
            }
    }
            (max === sporty) ? alert("Вам подойдет спортивная собака") :
                (max === guard) ? alert("Вам подойдет собака-охранник") :
                (max === companion) ? alert("Вам подойдет собака-компаньон") :
                (max === universal) ? alert("Вам подойдет собака-друг, ласковый и преданный пес с любящим сердцем") :
                (max < 5) ? alert("Ответьте на все вопросы");

   
};