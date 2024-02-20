import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { EditarCrearPersonaComponent } from './editar-crear-persona/editar-crear-persona.component';


const routes: Routes = [
  { path: 'listar', component: ListarPersonasComponent },
  { path: 'editar/:id', component: EditarCrearPersonaComponent },
  { path: 'crear', component: EditarCrearPersonaComponent },
  { path: '**', component: ListarPersonasComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
