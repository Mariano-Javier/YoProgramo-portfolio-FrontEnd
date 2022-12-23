import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre:string;
  descripcion:string;
  img:string;
  link:string;
  categoria:string;
  fecha:string;

  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.img, this.link, this.categoria, this.fecha)
    this.sProyectos.save(proyecto).subscribe(
      data=>{
        alert("Proyecto añadido!!");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  formData: any;

  handleSubmit(e: FormData) {
    this.formData = { ...e };
  }
}
