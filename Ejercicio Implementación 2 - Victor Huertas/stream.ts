import { Audiencia } from "./audiencia.js"
import { Categoria } from "./categoria.js"

export class Stream{
    tema:string
    categorias:Categoria[]
    audiencia:Audiencia[]
    constructor(tema:string){
        this.tema=tema
        this.categorias=[]
        this.audiencia=[]
    }
    mostrarDetalleStream():void{
        console.log(`Tema: ${this.tema} 
                    Categorias: ${this.categorias}
                    Audiencia: ${this.audiencia}`)
    }
    agrearCategoria(nuevaCategoria:Categoria):void{
        let auxNuevaCategoria = new Categoria(nuevaCategoria.nombre,nuevaCategoria.descripcion,nuevaCategoria.imagen)
        this.categorias.push(auxNuevaCategoria)
    }
    agregarAudiencia(nuevaAudiencia:Audiencia):void{
        let auxNuevaAudiencia = new Audiencia(nuevaAudiencia.nickname)
        this.audiencia.push(auxNuevaAudiencia)
    }
}