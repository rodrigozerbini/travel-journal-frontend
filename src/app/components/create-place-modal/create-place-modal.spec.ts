import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaceModal } from './create-place-modal';

describe('CreatePlaceModal', () => {
  let component: CreatePlaceModal;
  let fixture: ComponentFixture<CreatePlaceModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaceModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePlaceModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
