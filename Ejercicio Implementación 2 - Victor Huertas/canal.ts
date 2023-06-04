import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"

export class Canal{
    nombre:string
    banner:string
    descripcion:string
    streams:Stream[]
    streamers:Streamer[]
    constructor(nombre:string,banner:string,description:string){
        this.nombre=nombre
        this.banner=banner
        this.descripcion=description
        this.streams=[]
        this.streamers=[]
    }
    mostrarDetalleCanal():void{
        console.log(`Nombre: ${this.nombre} 
                     Banner: ${this.banner} 
                     Descripcion: ${this.descripcion}`)
    }
    mostrarListadoStreams():void{
        this.streams.forEach(e=>console.log(e))
    }
    mostrarListadoStreamers():void{
        this.streamers.forEach(e=>console.log(e))
    }
    agregarStreamer(nuevoStreamer:Streamer):void{
        let auxNuevoStreamer = new Streamer(nuevoStreamer.nickname,nuevoStreamer.descripcion)
        this.streamers.push(auxNuevoStreamer)
    }
    agregarStream(nuevoStream:Stream):void{
        let auxNuevoStream = new Stream(nuevoStream.tema)
        this.streams.push(auxNuevoStream)
    }
}