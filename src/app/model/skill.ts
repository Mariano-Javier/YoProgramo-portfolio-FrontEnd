export class Skill {
    id:number;
    nombre:string;
    porcentaje:number;
    colorInicio:string;
    colorFinal:string;


    constructor(nombre:string, porcentaje:number,colorInicio:string, colorFinal:string){
        this.nombre=nombre;
        this.porcentaje= porcentaje;
        this.colorInicio=colorInicio;
        this.colorFinal= colorFinal;
    }
}
