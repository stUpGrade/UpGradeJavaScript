let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(`globalBasePrice actualizado: ${globalBasePrice}`);
console.log(`Car1 finalPrice actualizado: ${car1.finalPrice}`);
console.log(`Car2 finalPrice actualizado: ${car2.finalPrice}`);