import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaPage } from './veterinaria.page';

describe('VeterinariaPage', () => {
  let component: VeterinariaPage;
  let fixture: ComponentFixture<VeterinariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
