function calculateVat(money, vat) {
    return money * vat / 100;
}

const totalVat = calculateVat(100, 7)
console.log(totalVat)