import { Canal } from "./canal.js";
import { Empresa } from "./empresa.js";
export class Plataforma {
    constructor(nombre, logo, descripcion) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresas = [];
        this.canales = [];
    }
    mostrarDetallePlataforma() {
        console.log(`Nombre: ${this.nombre} 
                    Logo: ${this.nombre} 
                    Descripcion: ${this.descripcion} 
                    Patrocinadores: ${this.empresas}`);
    }
    mostrarListadoCanales() {
        this.canales.forEach(e => console.log(e));
    }
    agregarCanal(nuevoCanal) {
        let auxNuevoCanal = new Canal(nuevoCanal.nombre, nuevoCanal.banner, nuevoCanal.descripcion);
        this.canales.push(auxNuevoCanal);
    }
    agregarPatrocinador(nuevoPatrocinador) {
        let auxNuevoPatrocinador = new Empresa(nuevoPatrocinador.nombre);
        this.empresas.push(auxNuevoPatrocinador);
    }
}
