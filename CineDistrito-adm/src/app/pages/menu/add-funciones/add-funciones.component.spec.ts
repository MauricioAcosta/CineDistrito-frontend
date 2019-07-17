import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionesComponent } from './add-funciones.component';

describe('AddFuncionesComponent', () => {
  let component: AddFuncionesComponent;
  let fixture: ComponentFixture<AddFuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
