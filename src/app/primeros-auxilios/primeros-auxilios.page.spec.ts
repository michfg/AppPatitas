import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerosAuxiliosPage } from './primeros-auxilios.page';

describe('PrimerosAuxiliosPage', () => {
  let component: PrimerosAuxiliosPage;
  let fixture: ComponentFixture<PrimerosAuxiliosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerosAuxiliosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerosAuxiliosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
