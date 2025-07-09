import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { AdminDevocionalesComponent } from './devocionales/admin-devocionales/admin-devocionales.component';
import { AdminMusicaComponent } from './musica/admin-musica/admin-musica.component';
import { AdminVideosComponent } from './videos/admin-videos/admin-videos.component';

const routes: Routes = [
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'devocionales', component: AdminDevocionalesComponent },
  { path: 'musica', component: AdminMusicaComponent },
  { path: 'videos', component: AdminVideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

