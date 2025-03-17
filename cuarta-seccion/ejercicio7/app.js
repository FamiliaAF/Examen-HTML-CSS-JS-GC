// Ejercicio 7: Uso de map(), filter() y reduce()
const numerosArray = [5, 12, 8, 130, 44, 2, 60];

const duplicados = numerosArray.map(num => num * 2);

const mayoresA10 = numerosArray.filter(num => num > 10);

const sumaTotal = numerosArray.reduce((acumulador, num) => acumulador + num, 0);

console.log("Arreglo con números duplicados:", duplicados);
console.log("Números mayores a 10:", mayoresA10);
console.log("Suma total de los elementos:", sumaTotal);