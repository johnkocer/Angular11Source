import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select03Component } from './select03.component';

describe('Select03Component', () => {
  let component: Select03Component;
  let fixture: ComponentFixture<Select03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
