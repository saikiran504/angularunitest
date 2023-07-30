import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent]
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Pass" if the score is greater than or equal to 60', () => {
    const passScore = 80;
    const result = component.checkResult(passScore);
    expect(result).toEqual('Pass');
  });

  it('should return "Fail" if the score is less than 60', () => {
    const failScore = 45;
    const result = component.checkResult(failScore);
    expect(result).toEqual('Fail');
  });
  
})
