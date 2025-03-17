// Ejercicio 5: Manipulación de objetos en JavaScript
let persona = {
  nombre: "Lucas",
  edad: 25,
  profesion: "Desarrollador",
  saludar: function() {
    console.log(`Hola, mi nombre es ${persona.nombre} y soy ${persona.profesion}`);
  }
};

let persona2 = {
  nombre: "Olga",
  edad: 28,
  profesion: "Diseñadora",
  saludar: function() {
    console.log(`Hola, mi nombre es ${persona2.nombre} y soy ${persona2.profesion}`);
  }
};

persona.saludar();
persona2.saludar();