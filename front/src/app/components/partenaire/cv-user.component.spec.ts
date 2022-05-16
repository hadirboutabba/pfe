import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvUserComponent } from './cv-user.component';

describe('CvUserComponent', () => {
  let component: CvUserComponent;
  let fixture: ComponentFixture<CvUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
