import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinPipesComponent } from './buildin-pipes.component';

describe('BuildinPipesComponent', () => {
  let component: BuildinPipesComponent;
  let fixture: ComponentFixture<BuildinPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildinPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildinPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
