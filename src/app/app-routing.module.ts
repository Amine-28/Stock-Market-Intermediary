import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component' ;
import {MiddleComponent} from './middle/middle.component'; 
import {ClientComponent} from './client/client.component'; 
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { PresentComponent } from './present/present.component';
import { MetiersComponent } from './metiers/metiers.component';
import { ActionsComponent } from './actions/actions.component';
import { ContactComponent } from './contact/contact.component';
import { EquipeComponent } from './equipe/equipe.component';
import { LibreComponent } from './libre/libre.component';
import { LienComponent } from './lien/lien.component';
import { MandatComponent } from './mandat/mandat.component';

const appRoutes: Routes = [
{path:'login', component:LoginComponent},
{path: 'middle' , component:MiddleComponent},
{path:'client', component:ClientComponent},
{path:'register', component:RegisterComponent},
{path:'metiers', component:MetiersComponent},
{path:'present', component:PresentComponent},
{path:'actions', component:ActionsComponent},
{path:'contact', component:ContactComponent},
{path:'lien', component:LienComponent},
{path:'mandat', component:MandatComponent},
{path:'libre', component:LibreComponent},
{path:'equipe', component:EquipeComponent},
{path:'',
redirectTo :'/middle',
pathMatch:'full'}];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(appRoutes),HttpModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
