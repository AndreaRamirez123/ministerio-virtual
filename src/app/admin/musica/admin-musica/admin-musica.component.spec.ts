import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMusicaComponent } from './admin-musica.component';

describe('AdminMusicaComponent', () => {
  let component: AdminMusicaComponent;
  let fixture: ComponentFixture<AdminMusicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMusicaComponent]
    });
    fixture = TestBed.createComponent(AdminMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
