import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewHardsoftComponent } from './components/hardsoft-skills/new-hardsoft.component';
import { EditHardsoftComponent } from './components/hardsoft-skills/edit-hardsoft.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component:EditeducacionComponent},
  {path:'newskill', component: NewHardsoftComponent},
  {path:'editskill/:id', component:EditHardsoftComponent},
  {path:'editacercade/:id', component:EditHeaderComponent},
  {path:'newproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component:EditProyectoComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
