import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcardComponent } from './chartcard.component';

describe('ChartcardComponent', () => {
  let component: ChartcardComponent;
  let fixture: ComponentFixture<ChartcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
