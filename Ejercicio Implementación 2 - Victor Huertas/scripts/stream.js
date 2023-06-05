import { Audiencia } from "./audiencia.js";
import { Categoria } from "./categoria.js";
export class Stream {
    constructor(tema) {
        this.tema = tema;
        this.categorias = [];
        this.audiencia = [];
    }
    mostrarDetalleStream() {
        console.log(`Tema: ${this.tema} 
                    Categorias: ${this.categorias}
                    Audiencia: ${this.audiencia}`);
    }
    agrearCategoria(nuevaCategoria) {
        let auxNuevaCategoria = new Categoria(nuevaCategoria.nombre, nuevaCategoria.descripcion, nuevaCategoria.imagen);
        this.categorias.push(auxNuevaCategoria);
    }
    agregarAudiencia(nuevaAudiencia) {
        let auxNuevaAudiencia = new Audiencia(nuevaAudiencia.nickname);
        this.audiencia.push(auxNuevaAudiencia);
    }
}
