import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarlistComponent } from './barlist/barlist.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { MiddleComponent } from './middle/middle.component';
import {LoginComponent} from './login/login.component' ;
import { RightsideComponent } from './rightside/rightside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule} from  '@angular/material' ; 
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { BadgeModule, IconsModule, WavesModule } from 'angular-bootstrap-md';
import {RouterModule , Routes} from '@angular/router';
import { ClientComponent } from './client/client.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ContactService } from './contact.service';
import { RegisterComponent } from './register/register.component';
import { AchatService } from './achat.service';
import { PresentComponent } from './present/present.component';
import { MetiersComponent } from './metiers/metiers.component';
import { ActionsComponent } from './actions/actions.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
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
  declarations: [
    AppComponent,
    HeaderComponent,
    BarlistComponent,
    LeftsideComponent,
    MiddleComponent,
    RightsideComponent,
    LoginComponent,
    ClientComponent,
    RegisterComponent,
    PresentComponent,
    MetiersComponent,
    ActionsComponent,
    AnalyseComponent,
    ContactComponent,
    FooterComponent,
    EquipeComponent,
    LibreComponent,
    LienComponent,
    MandatComponent,
    
        
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    HttpModule
  ],

  providers: [ContactService,AchatService],
  exports: [],
  bootstrap: [AppComponent]

})
export class  AppModule {
  
 }
