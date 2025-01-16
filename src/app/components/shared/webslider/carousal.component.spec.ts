import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSliderComponent } from './carousal.component';

describe('WebSliderComponent', () => {
  let component: WebSliderComponent;
  let fixture: ComponentFixture<WebSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WebSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
