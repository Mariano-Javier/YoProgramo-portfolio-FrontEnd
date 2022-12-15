export class Educacion {
    
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaE:string;
    urlE:string;

    constructor(nombreE: string, descripcionE:string, fechaE:string, urlE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaE = fechaE;
        this.urlE = urlE;
    }
}
