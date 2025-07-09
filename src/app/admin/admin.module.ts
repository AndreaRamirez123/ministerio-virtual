import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { AdminDevocionalesComponent } from './devocionales/admin-devocionales/admin-devocionales.component';
import { AdminMusicaComponent } from './musica/admin-musica/admin-musica.component';
import { AdminVideosComponent } from './videos/admin-videos/admin-videos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TestimoniosComponent,
    AdminDevocionalesComponent,
    AdminMusicaComponent,
    AdminVideosComponent,

  ],

  exports: [
    AdminDevocionalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
