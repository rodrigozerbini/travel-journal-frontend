import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-place-button',
  styleUrl: './add-place-button.scss',
  templateUrl: './add-place-button.html',
})
export class AddPlaceButton {
  clicked = output<void>();
}
