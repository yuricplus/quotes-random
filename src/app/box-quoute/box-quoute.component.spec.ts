import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxQuouteComponent } from './box-quoute.component';

describe('BoxQuouteComponent', () => {
  let component: BoxQuouteComponent;
  let fixture: ComponentFixture<BoxQuouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxQuouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxQuouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
