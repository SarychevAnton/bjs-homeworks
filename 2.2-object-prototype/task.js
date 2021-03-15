//String.prototype.isPalindrome - для задачи №1
"use strict";
String.prototype.isPalindrome = function isPalindrome(){
    let Text = this.toLowerCase();
    let n = Text.length;
    for (let i = 0; i < n; i++){
    if (Text [i] === Text[ n - i - 1]){
        return true;
    }
    else {
        return false;
    }
}
}
 
function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0){
        return 0;
    }
    else {
    for (let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
}
    let roundedAverage = Math.round(sum / marks.length);
    return roundedAverage;

}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    const now = new Date();
    const userBirthday = new Date(birthday);
    let verdict = false;
    let diff = now - userBirthday;
    let age = diff / (1000 * 3600 * 24 * 365.242);
    if (age >= 18) {
        verdict = true;
    }
    return verdict;
}