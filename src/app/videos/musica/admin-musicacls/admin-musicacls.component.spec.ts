import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMusicaclsComponent } from './admin-musicacls.component';

describe('AdminMusicaclsComponent', () => {
  let component: AdminMusicaclsComponent;
  let fixture: ComponentFixture<AdminMusicaclsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMusicaclsComponent]
    });
    fixture = TestBed.createComponent(AdminMusicaclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
