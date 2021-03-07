'use strict';
// первая задача
function getSolutions(a,b,c){
    let D = b * b - 4 * a * c;
        if (D < 0){
            return {
                D, 
                roots: []
            };
        } 
        if (D == 0) {
            let x1 = -b / (2 * a);
            return {
                D ,
                roots: [x1],
            };
        }
        if (D > 0)   {
            let x1 = (-b + Math.sqrt(D)) / (2 * a);
            let x2 = (-b - Math.sqrt(D)) / (2 * a);
            let x = [x1, x2]
            return {
                D,
                roots: x,
            };
        }
}

function showSolutionsMessage( a, b, c ){
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0){
        console.log('Уравнение не имеет вещественных корней');
    }
    if (result.D == 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    if (result.D > 0){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
// showSolutionsMessage(1, 2, 3);
// showSolutionsMessage(7, 20, -3);
// showSolutionsMessage(2, 4, 2);

// вторая задача
function getAverageScore(data) {
    let object = new Object();
    object.average = 0;
    let counter = 0;
    for (let property in data) {
        object[property] = getAverageMark(data[property]);
        object.average += getAverageMark(data[property]);
        counter++;
    }
    object.average = object.average / counter;
    if (isNaN(object.average)) {
        object.average = 0;
    }
    return object;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length != 0) {
        for (let i = 0; i < marks.length; i++)
        {
            averageMark += marks[i];
        }
        return averageMark / marks.length;
    } else {
        return 0;
    }
}
// console.log( getAverageScore({
//     algebra : [4, 5, 5, 4],
//     geometry : [2, 5],
//     russian : [3, 3, 4, 5],
//     physics : [5, 5],
//     music : [ 2, 2, 5],
//     english : [4, 4, 3, 3],
//     poetry : [5, 3, 4],
//     chemistry : [2],
//     french : [4, 4] 
// }));


// третья задача
function getPersonData(secretData) {
    let decodedData = {};
    for (let property in secretData) {
      secretData[property] = getDecodedValue(secretData[property]);
    }
    decodedData.firstName = secretData.aaa;
    decodedData.lastName = secretData.bbb;
    return decodedData;  
  }
  
  function getDecodedValue(secret) {  
    let secretValue = secret ? 'Эмильо' : 'Родриго';
    return secretValue;
  }
//   console.log(getPersonData({
//       aaa: 0,
//       bbb: 0,
//   }));
//   console.log(getPersonData({
//     aaa: 1,
//     bbb: 0,
// }));
// console.log(getPersonData({
//     aaa: 0,
//     bbb: 1,
// }));
// console.log(getPersonData({
//     aaa: 1,
//     bbb: 1,
// }));