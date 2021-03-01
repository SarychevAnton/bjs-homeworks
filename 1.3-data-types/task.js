function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    let creditAmount = amount - contribution;//сумма кредита
    let today = new Date();
    let creditTerm = Math.abs(date.getMonth()-today.getMonth() + (12*(date.getFullYear() - today.getFullYear())));//срок кредита
    let monthContribution = creditAmount * ((percent/12/100) + (percent/12/100)/(((1 + (percent/12/100))**creditTerm)-1));//ежемесячный платеж
    let totalAmount = monthContribution * creditTerm;
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    name ? greeting = `Привет, мир! Меня зовут ${name}.` : greeting = "Привет, мир! Меня зовут Аноним.";
    return greeting;
}