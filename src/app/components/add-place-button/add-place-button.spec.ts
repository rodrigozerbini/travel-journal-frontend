import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPlaceButton } from './add-place-button';

describe('AddPlaceButton', () => {
  let component: AddPlaceButton;
  let fixture: ComponentFixture<AddPlaceButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlaceButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlaceButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
