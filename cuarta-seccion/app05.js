// Ejercicio 5: Manipulación de objetos en Javascript

const persona = {
  nombre: 'Juan',
  edad: 35,
  profesion: 'Programador',
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  },
  hacer() {
    return `Soy ${this.nombre} y desarrollo videojuegos`;
  }
}

const persona2 = {
  nombre: 'Carlos',
  edad: 25,
  profesion: 'Diseñador',
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  },
}

console.log(persona.nombre); // Juan
console.log(persona.edad); 
persona.saludar();
console.log(persona.hacer());
persona2.saludar();