import { Plataforma } from "./plataforma.js";

export class Apicacion{
    plataformas:Plataforma[]
    constructor(){
        this.plataformas=[]
    }
    mostrarListadoPlataformas():void{
        this.plataformas.forEach(e=>console.log(e))
    }
    agregarPlataforma(nuevaPlataforma:Plataforma):void{
        let auxNuevaPlataforma = new Plataforma(nuevaPlataforma.nombre,nuevaPlataforma.logo,nuevaPlataforma.descripcion)
        this.plataformas.push(auxNuevaPlataforma)
    }
}