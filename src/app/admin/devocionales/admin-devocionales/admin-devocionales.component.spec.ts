import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDevocionalesComponent } from './admin-devocionales.component';

describe('AdminDevocionalesComponent', () => {
  let component: AdminDevocionalesComponent;
  let fixture: ComponentFixture<AdminDevocionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDevocionalesComponent]
    });
    fixture = TestBed.createComponent(AdminDevocionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
