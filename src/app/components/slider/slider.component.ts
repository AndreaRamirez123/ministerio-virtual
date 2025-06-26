import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {}

