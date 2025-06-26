import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevocionalesComponent } from './devocionales.component';

describe('DevocionalesComponent', () => {
  let component: DevocionalesComponent;
  let fixture: ComponentFixture<DevocionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevocionalesComponent]
    });
    fixture = TestBed.createComponent(DevocionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
