import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',title:'John Dormont', component: LandingComponent},
  {path:'about' , title:'About me',component: AboutComponent},
  {path:'works' , title:'My works',component:WorksComponent},
  {path:'contact', title:'Contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
