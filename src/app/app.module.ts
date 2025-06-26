import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DevocionalesComponent } from './pages/devocionales/devocionales.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { AdminTestimoniosComponent } from './admin-testimonios/admin-testimonios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    DevocionalesComponent,
    TestimoniosComponent,
    AdminTestimoniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
