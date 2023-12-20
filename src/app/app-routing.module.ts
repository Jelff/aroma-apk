import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './shared/inicio/inicio.component';

const routes: Routes = [

  {
     path: 'explorar-receitas', component: HeaderComponent
  },
  {
    path: 'inicio', component: InicioComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
