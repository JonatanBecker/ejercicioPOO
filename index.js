class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = ['javascript', 'HTML', 'CSS']
    }
    obtenDatos() {
        return {
           nombre: this.nombre,
           asignaturas: this.asignaturas
        };
    }
}

const nuevoEstudiante = new Estudiante("Boris");
console.log(nuevoEstudiante.obtenDatos());