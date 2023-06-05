import { Canal } from "./canal.js";
import { RedSocial } from "./redSocial.js";
import { Stream } from "./stream.js";
import { Usuario } from "./usuario.js";
export class Streamer extends Usuario {
    constructor(nickname, descripcion) {
        super(nickname);
        this.descripcion = descripcion;
        this.redesSocuales = [];
        this.canales = [];
        this.streams = [];
    }
    verDetalleStreamer() {
        console.log(`Nickname ${this.nickname} 
                    Descripcion: ${this.descripcion}
                    Redes Sociales ${this.redesSocuales}`);
    }
    agregarStreamAStrimer(nuevoStream) {
        let auxNuevoStream = new Stream(nuevoStream.tema);
        this.streams.push(auxNuevoStream);
    }
    agregarCanalAStreamer(nuevoCanal) {
        let auxNuevoCanal = new Canal(nuevoCanal.nombre, nuevoCanal.banner, nuevoCanal.descripcion);
        this.canales.push(auxNuevoCanal);
    }
    agregarRedSocial(nuevaRedSocial) {
        let auxRedSocial = new RedSocial(nuevaRedSocial.nombre, nuevaRedSocial.sitioWeb);
        this.redesSocuales.push(auxRedSocial);
    }
}
