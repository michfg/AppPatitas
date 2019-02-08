import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaIdealPage } from './mascota-ideal.page';

describe('MascotaIdealPage', () => {
  let component: MascotaIdealPage;
  let fixture: ComponentFixture<MascotaIdealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaIdealPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaIdealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
