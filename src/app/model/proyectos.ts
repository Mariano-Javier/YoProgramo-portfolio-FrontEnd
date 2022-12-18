export class Proyectos {

    id:number;
    nombre:string;
    descripcion:string;
    img:string;
    link:string;
    categoria:string;
    fecha:string;

    constructor(nombre:string,descripcion:string,img:string,link:string,categoria:string,fecha:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img=img;
        this.link=link;
        this.categoria=categoria;
        this.fecha=fecha;
    }
}
