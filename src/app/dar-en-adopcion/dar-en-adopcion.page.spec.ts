import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarEnAdopcionPage } from './dar-en-adopcion.page';

describe('DarEnAdopcionPage', () => {
  let component: DarEnAdopcionPage;
  let fixture: ComponentFixture<DarEnAdopcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarEnAdopcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarEnAdopcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
