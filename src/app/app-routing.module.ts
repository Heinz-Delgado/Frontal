import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import {ClienteComponent} from './cliente/cliente.component';
import { ServerComponent} from './server/server.component';
import { SucursalComponent} from './sucursal/sucursal.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'cliente', component:ClienteComponent},
  {path: 'server', component:ServerComponent},
  {path: 'sucursal', component:SucursalComponent},
  {path:"**", redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
