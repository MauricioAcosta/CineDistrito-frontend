import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConsultPeliComponent } from './basic-consult-peli.component';

describe('BasicConsultPeliComponent', () => {
  let component: BasicConsultPeliComponent;
  let fixture: ComponentFixture<BasicConsultPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicConsultPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicConsultPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
