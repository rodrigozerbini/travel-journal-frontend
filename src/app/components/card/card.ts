import { Component, input } from '@angular/core';
import { Place } from '../../models/place';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {
  place = input.required<Place>();
}
