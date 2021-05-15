import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {path:'Home',component: HomeComponent},
  {path:'About',component: AboutComponent},
  {path:'Project',component: ProjectsComponent},
  {path:'Contact',component: ContactComponent},
  {path:'Footer',component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
