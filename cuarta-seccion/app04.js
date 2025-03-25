// Ejercicio 4: Uso de while y números aleatorios
while (true) {
  let num = Math.floor(Math.random() * 10) + 1;
  console.log(`Número generado: ${num}`);
  
  if (num >= 8) {
     console.log("Se generó un número alto, fin del programa");
    break; 
  }
}