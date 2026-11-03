import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PlaceRequest, PlaceResponse } from '../models/place-api';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private readonly http = inject(HttpClient);
  private readonly url = '/api/v1/places';

  create(request: PlaceRequest) {
    return this.http.post<PlaceResponse>(this.url, request);
  }
}
