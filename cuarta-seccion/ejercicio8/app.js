// Ejercicio 8: Desestructuración de objetos y arreglos
const usuario = {
  nombre: "Carlos",
  edad: 30,
  pais: "México",
  habilidades: ["JavaScript", "CSS", "HTML"]
};

const { nombre, edad, pais, habilidades } = usuario;

const [habilidad1, habilidad2] = habilidades;

console.log(nombre);
console.log(edad);
console.log(pais); 
console.log(habilidad1); 
console.log(habilidad2); 
