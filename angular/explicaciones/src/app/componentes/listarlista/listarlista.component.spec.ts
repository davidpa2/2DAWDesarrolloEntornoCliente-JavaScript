import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlistaComponent } from './listarlista.component';

describe('ListarlistaComponent', () => {
  let component: ListarlistaComponent;
  let fixture: ComponentFixture<ListarlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
