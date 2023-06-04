import { Canal } from "./canal.js"
import { Empresa } from "./empresa.js"

export class Plataforma{
    nombre:string
    logo:string
    descripcion:string
    empresas:Empresa[]
    canales:Canal[]
    constructor(nombre:string,logo:string,descripcion:string){
        this.nombre=nombre
        this.logo=logo
        this.descripcion=descripcion
        this.empresas=[]
        this.canales=[]
    }
    mostrarDetallePlataforma():void{
        console.log(`Nombre: ${this.nombre} 
                    Logo: ${this.nombre} 
                    Descripcion: ${this.descripcion} 
                    Patrocinadores: ${this.empresas}`)
    }
    mostrarListadoCanales():void{
        this.canales.forEach(e=>console.log(e))
    }
    agregarCanal(nuevoCanal:Canal):void{
        let auxNuevoCanal = new Canal(nuevoCanal.nombre,nuevoCanal.banner,nuevoCanal.descripcion)
        this.canales.push(auxNuevoCanal)
    }
    agregarPatrocinador(nuevoPatrocinador:Empresa):void{
        let auxNuevoPatrocinador = new Empresa(nuevoPatrocinador.nombre)
        this.empresas.push(auxNuevoPatrocinador)
    }
}