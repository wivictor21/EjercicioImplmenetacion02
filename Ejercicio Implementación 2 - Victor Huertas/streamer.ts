import { Canal } from "./canal.js";
import { RedSocial } from "./redSocial.js";
import { Stream } from "./stream.js";
import { Usuario } from "./usuario.js";

export class Streamer extends Usuario{
    descripcion:string
    redesSocuales:RedSocial[]
    canales:Canal[]
    streams:Stream[]
    constructor(nickname:string,descripcion:string){
        super(nickname)
        this.descripcion=descripcion
        this.redesSocuales=[]
        this.canales=[]
        this.streams=[]
    }
    verDetalleStreamer():void{
        console.log(`Nickname ${this.nickname} 
                    Descripcion: ${this.descripcion}
                    Redes Sociales ${this.redesSocuales}`)
    }
    agregarStreamAStrimer(nuevoStream:Stream):void{
        let auxNuevoStream = new Stream(nuevoStream.tema)
        this.streams.push(auxNuevoStream)
    }
    agregarCanalAStreamer(nuevoCanal:Canal):void{
        let auxNuevoCanal = new Canal(nuevoCanal.nombre,nuevoCanal.banner,nuevoCanal.descripcion)
        this.canales.push(auxNuevoCanal)
    }
}