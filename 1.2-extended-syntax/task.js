'use strict';
function getResult(a,b,c){
let x = [];
let D = Math.pow(b,2) - (4 * a * c);
if (D < 0) {
    x = [];
    return x;
}
else if (D == 0) {
        x[0]= ((-b + Math.sqrt(D)) / (2 * a));
        return x;
    }
else if (D > 0) {
        x[0] = ((-b + Math.sqrt(D)) / (2 * a));
        x[1] = ((-b - Math.sqrt(D)) / (2 * a));
        return x;
    }
}

function getAverageMark(marks){
    let averageMark = 0;
    if (marks.length == 0){
        return 0;
    }
    for (let i = 0; i < marks.length; i++){
        averageMark += marks[i];
        if(marks.length > 5){
            alert ("Общее количество оценок более 5. Выведено среднее значение первых 5 оценок.");
            marks.length = 5;
        }
    }
    return averageMark / marks.length;
}

function askDrink(name,dateOfBirthday){
    let date = new Date();
    let result;
    let age = date.getFullYear() - dateOfBirthday.getFullYear();
    if (age > 18){
     result = `Не желаете ли олд-фэшн, ${name}?`;
        }
    else {
     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
        }
    return result;
   }
