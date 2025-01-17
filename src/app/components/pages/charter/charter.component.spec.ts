import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterComponent } from './charter.component';

describe('TermsComponent', () => {
  let component: CharterComponent;
  let fixture: ComponentFixture<CharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
