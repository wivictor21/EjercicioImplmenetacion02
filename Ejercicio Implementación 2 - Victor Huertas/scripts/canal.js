import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";
export class Canal {
    constructor(nombre, banner, description) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = description;
        this.streams = [];
        this.streamers = [];
    }
    mostrarDetalleCanal() {
        console.log(`Nombre: ${this.nombre} 
                     Banner: ${this.banner} 
                     Descripcion: ${this.descripcion}`);
    }
    mostrarListadoStreams() {
        this.streams.forEach(e => console.log(e));
    }
    mostrarListadoStreamers() {
        this.streamers.forEach(e => console.log(e));
    }
    agregarStreamer(nuevoStreamer) {
        let auxNuevoStreamer = new Streamer(nuevoStreamer.nickname, nuevoStreamer.descripcion);
        this.streamers.push(auxNuevoStreamer);
    }
    agregarStream(nuevoStream) {
        let auxNuevoStream = new Stream(nuevoStream.tema);
        this.streams.push(auxNuevoStream);
    }
}
