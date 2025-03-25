// Ejercicio 3: Ciclo for y manipulación de arreglos
let numeros = [3, 7, 1, 12, 9, 20, 5, 15, 8, 6];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  suma += numeros[i];
  if (numeros[i] > mayor) mayor = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
}

console.log("Suma de todos los elementos:", suma);
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
