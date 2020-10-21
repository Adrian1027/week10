import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtoMComponent } from './add-ato-m.component';

describe('AddAtoMComponent', () => {
  let component: AddAtoMComponent;
  let fixture: ComponentFixture<AddAtoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAtoMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
