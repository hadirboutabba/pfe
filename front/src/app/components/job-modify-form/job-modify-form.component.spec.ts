import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobModifyFormComponent } from './job-modify-form.component';

describe('JobModifyFormComponent', () => {
  let component: JobModifyFormComponent;
  let fixture: ComponentFixture<JobModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobModifyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
