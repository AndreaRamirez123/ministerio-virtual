import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DevocionalesComponent } from './pages/devocionales/devocionales.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { AdminTestimoniosComponent } from './admin-testimonios/admin-testimonios.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { FilterPipe } from './pipes/filter.pipe';
import { VideosComponent } from './components/videos/videos.component';
import { VideoService } from './services/video.service';
import { SafeUrlPipe } from './pipes/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    DevocionalesComponent,
    TestimoniosComponent,
    AdminTestimoniosComponent,
    MusicaComponent,
    FilterPipe,
    VideosComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [VideoService],
  bootstrap: [AppComponent]

})
export class AppModule { }
