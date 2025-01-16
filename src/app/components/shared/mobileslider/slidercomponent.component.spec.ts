import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSlideComponent } from './slidercomponent.component';

describe('MobileSlideComponent', () => {
  let component: MobileSlideComponent;
  let fixture: ComponentFixture<MobileSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSlideComponent]
    });
    fixture = TestBed.createComponent(MobileSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
