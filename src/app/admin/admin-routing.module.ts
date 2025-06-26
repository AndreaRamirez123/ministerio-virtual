import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimoniosComponent } from './testimonios/testimonios.component';

const routes: Routes = [
  { path: 'testimonios', component: TestimoniosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

