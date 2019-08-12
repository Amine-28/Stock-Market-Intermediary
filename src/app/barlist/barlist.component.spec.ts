import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarlistComponent } from './barlist.component';

describe('BarlistComponent', () => {
  let component: BarlistComponent;
  let fixture: ComponentFixture<BarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
