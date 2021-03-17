'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        this.fix = function fix(){
            this.state *= 1.5;
        }
    }
    set state(state){
        if (state < 0){
            this._state = 0;
        }
        else if (state > 100){
            this._state = 100;
        }
        else {
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}
//  const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

//  console.log(sherlock.releaseDate); //2019
//  console.log(sherlock.state); //100
//  sherlock.fix();
//  console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state,type) {
        super(name,releaseDate,pagesCount,state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name,releaseDate,pagesCount,state,type) {
        super(name,releaseDate,pagesCount,state);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name,releaseDate,pagesCount,state,type) {
        super(author, name,releaseDate,pagesCount,state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name,releaseDate,pagesCount,state,type) {
        super( author, name,releaseDate,pagesCount,state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name,releaseDate,pagesCount,state,type) {
        super( author, name,releaseDate,pagesCount,state);
        this.type = 'detective';
    }
}

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15



class Library {
    constructor(name, books){
        this.name = String(name);
        this.books = [];
    }
    addBook(book){
        this.book = book;
        if(this.book._state > 30){
            this.books.push(this.book);
        }
    }
   
findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
            return this.books[i];
        }
    }
    return null;
}
giveBookByName(bookName){
    for (let book of this.books) {
        if (bookName === book.name) {
          this.books.splice(this.books.indexOf(book),1);
          return book;
        }
      }
      return null;
    }
}
// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.add = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade >= 0 && grade < 6) {
            if (this.add[subject] === undefined) {
                this.add[subject] = [];
            }
            this.add[subject].push(grade);
            console.log(this.add[subject].length);
        } else {
            console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
        }
        return this.add;
    }
    getAverageBySubject(subject) {
        if (this.add[subject] === undefined) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i < this.add[subject].length; i++) {
            sum += this.add[subject][i];
        }
        return sum / this.add[subject].length;
    }
    getTotalAverage() {
        if (this.add === undefined) {
            return 0;
        }
        let sum = 0;
        let sumProp = 0;
        for (let prop in this.add) {
            sum += this.getAverageBySubject([prop]);
            sumProp++;
        }
        return sum / sumProp;
    }
}

// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// alert(log.getTotalAverage()); // 3,75

