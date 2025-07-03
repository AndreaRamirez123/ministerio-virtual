import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevocionalesComponent } from './pages/devocionales/devocionales.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { AdminTestimoniosComponent } from './admin-testimonios/admin-testimonios.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { VideosComponent } from './components/videos/videos.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'devocionales', component : DevocionalesComponent },
  { path: 'testimonios', component : TestimoniosComponent },
  { path: 'admin-testimonios', component : AdminTestimoniosComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'musica', component : MusicaComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'donaciones', component: DonacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


