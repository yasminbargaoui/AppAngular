import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppFirstComponent } from './app-first/app-first.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"offers",component:OffersComponent},
  {path:"**",component:AppFirstComponent},
  {path:"app-first", component:AppFirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
