import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places');
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places').pipe(tap({
      next: (userPlaces) => {
        if (userPlaces.body?.places){
          this.userPlaces.set(userPlaces.body.places)}}
    }));
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: placeId,
    });
  }

  removeUserPlace(place: Place) {}
  //
  private fetchPlaces(url: string) {
    return this.httpClient.get<{ places: Place[] }>(url, {
      observe: 'response',
    });
  }
}
