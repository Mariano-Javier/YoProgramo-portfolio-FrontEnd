import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-new-hardsoft',
  templateUrl: './new-hardsoft.component.html',
  styleUrls: ['./new-hardsoft.component.css']
})
export class NewHardsoftComponent implements OnInit {

  nombre:string;
  porcentaje:number;
  colorInicio:string;
  colorFinal:string;

  formData: any;

  handleSubmit(e: FormData) {
    this.formData = { ...e };
  }

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje, this.colorInicio, this.colorFinal)
    this.skillS.save(skill).subscribe(
      data=>{
        alert("Skill añadida!!");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
