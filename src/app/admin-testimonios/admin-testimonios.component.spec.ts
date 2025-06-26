import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestimoniosComponent } from './admin-testimonios.component';

describe('AdminTestimoniosComponent', () => {
  let component: AdminTestimoniosComponent;
  let fixture: ComponentFixture<AdminTestimoniosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTestimoniosComponent]
    });
    fixture = TestBed.createComponent(AdminTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
