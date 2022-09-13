import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '', component: NavComponent , children: [
      {path: 'home', component: HomeComponent},
      {path: 'funcionarios', component: FuncionarioListComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
