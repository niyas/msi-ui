import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";

import { MsiFormComponent } from './msi-form.component';

describe('MsiFormComponent', () => {
  let component: MsiFormComponent;
  let fixture: ComponentFixture<MsiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsiFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
