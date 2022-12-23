import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-hardsoft',
  templateUrl: './edit-hardsoft.component.html',
  styleUrls: ['./edit-hardsoft.component.css']
})
export class EditHardsoftComponent implements OnInit {

  skill:Skill = null;

  constructor(private skillS:SkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

 ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar skill!! ");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id,this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      })
  }

  formData: any;

  handleSubmit(e: FormData) {
    this.formData = { ...e };
  }

}
