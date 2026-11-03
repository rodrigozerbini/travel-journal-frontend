import { Component, inject, signal, viewChild } from '@angular/core';
import { Header } from './components/header/header';
import { Card } from './components/card/card';
import { PLACES } from './data/mock-places';
import { AddPlaceButton } from './components/add-place-button/add-place-button';
import {
  CreatePlaceModal,
  PlaceFormValue,
} from './components/create-place-modal/create-place-modal';
import { PlaceService } from './services/place.service';
import { PlaceResponse } from './models/place-api';

@Component({
  imports: [Header, Card, AddPlaceButton, CreatePlaceModal],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('travel-journal-frontend');
  protected readonly places = signal(PLACES);
  private readonly modal = viewChild.required(CreatePlaceModal);
  private readonly placeService = inject(PlaceService);

  protected openCreateModal() {
    this.modal().open();
  }

  protected onCreate(value: PlaceFormValue) {
    this.placeService.create(value).subscribe({
      next: (created: PlaceResponse) => console.log('place created', created),
      error: (err: unknown) => console.error('error creating place', err),
    });
  }
}
