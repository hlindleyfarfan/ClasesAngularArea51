import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HOLAComponent } from './hola.component';

describe('HOLAComponent', () => {
  let component: HOLAComponent;
  let fixture: ComponentFixture<HOLAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HOLAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HOLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
