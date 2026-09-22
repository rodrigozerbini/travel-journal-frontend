import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Card } from './components/card/card';
import { PLACES } from './data/mock-places';

@Component({
  imports: [Header, Card],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('travel-journal-frontend');
  protected readonly places = signal(PLACES);
}
