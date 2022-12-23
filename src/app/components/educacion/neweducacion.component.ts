import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from '../../services/educacion.service';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  nombreE: string='';
  descripcionE: string='';
  fechaE: string='';
  urlE:string='';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.descripcionE, this.fechaE, this.urlE)
    this.sEducacion.save(edu).subscribe(
      data=>{
        alert("Educación añadida!!");
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
