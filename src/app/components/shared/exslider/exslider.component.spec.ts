import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsliderComponent } from './exslider.component';

describe('ExsliderComponent', () => {
  let component: ExsliderComponent;
  let fixture: ComponentFixture<ExsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
