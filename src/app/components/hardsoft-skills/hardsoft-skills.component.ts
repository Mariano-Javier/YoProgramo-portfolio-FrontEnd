import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hardsoft-skills',
  templateUrl: './hardsoft-skills.component.html',
  styleUrls: ['./hardsoft-skills.component.css']
})
export class HardsoftSkillsComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillS:SkillService, private tokenService: TokenService) { }

  isLogged = false;

 ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillS.lista().subscribe(data => {this.skill = data;})
  }
  
  delete(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
          this.cargarSkill();
        }, err =>{
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}
