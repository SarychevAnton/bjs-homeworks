'use strict'
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(){
    return weapons.map(function(param) {
        return param.name;
    });
}
console.log(weapons);

function getCountReliableWeapons(param){
    let strength = weapons.filter(function(item) {
        return item.durability > param;
      });
      return strength.length;
}

function hasReliableWeapons(param){
    let allWeapons = weapons.map(function(param) {
        return param.durability;
      });
    let verdict = allWeapons.some(function(durability) {
        return durability > param;
      });
      return verdict;
}

function getReliableWeaponsNames(param){
    let strengthNew = weapons.filter(function(item) {
        return item.durability > param;
      });
      let names = strengthNew.map(function(param) {
        return param.name;
      });
    
      return names;
}

function getTotalDamage(){
    let totalDamage = weapons.reduce(function (parametr, element) { 

        return parametr + element.attack;
    
        }, 0);
    return totalDamage;
}
    
// №2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  }

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((arr1Item, i) => arr1Item === arr2[i]);
}
// console.log(compareArrays([8, 9], [6])); // false, разные значения
// console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
// console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
// console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
// console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    const memory = [];
    let comparisonFind;
     let result;
    return (...value) => {
      comparisonFind = memory.find(memoryItem => compareArrays(memoryItem.args, value));
      if (comparisonFind) {
        console.log('Из памяти');
        return comparisonFind.result;
      }
      result = fn(...value);
      console.log('Не из памяти');
      memory.push({
        args: value,
        result,
      })
      if (memory.length > limit) {
        memory.splice(0, 1);
      }
      return result;
    }
}

// const mSum = memorize((a, b, c, d) => a + b + c + d, 5);
// mSum(3, 5, 6, 7);
// mSum(3, 3, 6, 7);
// mSum(3, 5, 6, 7);


// testCase

function testCase(testFunction, processTime) {
    const arr = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
    console.time(processTime);
    for (let i = 0; i <= 10; i++) {
        arr.forEach(function (...arr) {
          testFunction.apply(this, ...arr)
        });
    }
    console.timeEnd(processTime);
  }
  console.log(testCase(sum, 'Время выполнения функции sum')); //1012.520751953125 ms
  console.log(testCase(memorize, 'Время выполнения функции memorize')); //0.14794921875 ms

  //   без задержки
  //Время выполнения функции sum: 0.69677734375 ms
  //Время выполнения функции memorize: 0.29296875 ms

  // с задержкой
  //Время выполнения функции sum: 5557.034912109375 ms
  //Время выполнения функции memorize: 0.152099609375 ms
  // Вывод - оптимизации вычислений штука хорошая)


  