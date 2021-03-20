'use strict'

function parseCount(value){
    const valueParse = Number.parseInt(value, 10);
    if (isNaN(valueParse)){
        throw new Error('Невалидное значение');
    }
    return valueParse;
}

function validateCount(value){
    try {
        return parseCount(value);
    } 
    catch (error) {
        return error;
    }
}

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
        throw new Error('Треугольник с такими сторонами не существует');
        }
    }


    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        const p = (this.getPerimeter())/2;
        const s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return +s.toFixed(3);
}
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    }
    catch(error) {
        return {
        getArea: function() {
        return 'Ошибка! Треугольник не существует';
        },  
      getPerimeter: function() {
        return 'Ошибка! Треугольник не существует';
        },
    }
    }
}
