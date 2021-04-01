'use strict'

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(alarmTime, callback, id){
        if (!id) throw newError('параметр id не передан');
        if (this.alarmCollection.some(item => item.id == id)){
            console.error('id уже существует');
            return;
        }
        this.alarmCollection.push({ alarmTime, callback, id });
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(item => item.id != id);
        return this.alarmCollection.findIndex(item => item.id != id) !== -1;
      }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
        return (`${hours}:${minutes}`);
    }

    start() {
        if (this.timerId === null) {
          this.timerId = setInterval(() => {
            this.alarmCollection.forEach(item => checkClock(item));
          }, 1000);
        }
        const checkClock = (item) => {
          if (this.getCurrentFormattedTime() === item.alarmTime) {
            item.callback();
            this.stop();
          }
        }
      }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item, i) => {
          console.log(`Будильник ${i + 1} заведен на ${item.alarmTime}`);
        });
      }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
      }
}

function testCase() {
    let clock = new AlarmClock();
    clock.addClock('01:40', () => console.log('Пора вставать'), 1);
    clock.addClock("01:41", () => { console.log('Уже пора вставать'); clock.removeClock(2)},2);
    clock.addClock('01:42', () => {
        console.log('WAKE UP!');
        clock.clearAlarms();
        clock.printAlarms();  
        },3);
    clock.addClock('01:45', () => console.log('WAKE UP!'),1);
    clock.printAlarms();    
    clock.start();
}

testCase();