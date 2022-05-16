import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersUserComponent } from './centers-user.component';

describe('CentersUserComponent', () => {
  let component: CentersUserComponent;
  let fixture: ComponentFixture<CentersUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
