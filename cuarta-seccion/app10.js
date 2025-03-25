class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0; 
  }

  acelerar() {
    this.velocidad += 10;
  }

  frenar() {
    this.velocidad = Math.max(0, this.velocidad - 10); // No permitir que la velocidad sea negativa
  }

  mostrarInfo() {
    console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}, Velocidad: ${this.velocidad} km/h`);
  }
}

const miCoche = new Coche('Toyota', 'Corolla', 2020);

miCoche.acelerar();
miCoche.acelerar();
miCoche.frenar();
miCoche.mostrarInfo();
