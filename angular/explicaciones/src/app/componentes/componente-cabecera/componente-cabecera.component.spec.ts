import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCabeceraComponent } from './componente-cabecera.component';

describe('ComponenteCabeceraComponent', () => {
  let component: ComponenteCabeceraComponent;
  let fixture: ComponentFixture<ComponenteCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
