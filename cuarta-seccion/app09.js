// Ejercicio 9: Creación de una función flecha con parámetros por defecto
const crearSaludo = (nombre = "Visitante") => `Hola, ${nombre}! Bienvenido a nuestra página.`;

console.log(crearSaludo("Ana")); 
console.log(crearSaludo()); 