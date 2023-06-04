import { Plataforma } from "./plataforma.js";
export class Apicacion {
    constructor() {
        this.plataformas = [];
    }
    mostrarListadoPlataformas() {
        this.plataformas.forEach(e => console.log(e));
    }
    agregarPlataforma(nuevaPlataforma) {
        let auxNuevaPlataforma = new Plataforma(nuevaPlataforma.nombre, nuevaPlataforma.logo, nuevaPlataforma.descripcion);
        this.plataformas.push(auxNuevaPlataforma);
    }
}
