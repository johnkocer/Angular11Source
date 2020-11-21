import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinDirectivesComponent } from './buildin-directives.component';

describe('BuildinDirectivesComponent', () => {
  let component: BuildinDirectivesComponent;
  let fixture: ComponentFixture<BuildinDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildinDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildinDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
