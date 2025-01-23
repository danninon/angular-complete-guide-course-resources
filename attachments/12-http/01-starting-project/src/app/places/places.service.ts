import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

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
    return this.fetchPlaces('http://localhost:3000/user-places').pipe(
      tap({
        next: (userPlaces) => {
          if (userPlaces.body?.places) {
            this.userPlaces.set(userPlaces.body.places);
          }
        },
      })
    );
  }

  addPlaceToUserPlaces(newUserPlace: Place) {
    const prevPlaces = this.userPlaces();
    
    // this.userPlaces.update(prevPlaces => [...prevPlaces, newUserPlace]);
    if (!prevPlaces.some((place)=> place.id === newUserPlace.id)){
      this.userPlaces.set([...prevPlaces, newUserPlace]);
    }

    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: newUserPlace.id,
      })
      .pipe(
        catchError((error) => {
          console.log(error);
          this.userPlaces.set(prevPlaces);
          return throwError(()=> new Error('Failed to store selected place.'))
        })
      );
  }

  removeUserPlace(newUserPlace: Place) {
    const prevPlaces = this.userPlaces();
    
    // this.userPlaces.update(prevPlaces => [...prevPlaces, newUserPlace]);
    if (prevPlaces.some((place)=> place.id === newUserPlace.id)){
      this.userPlaces.set(prevPlaces.filter(place=>place.id !== newUserPlace.id));
    }

    return this.httpClient
    .delete('http://localhost:3000/user-places/' + newUserPlace.id)
    .pipe(
      catchError((error) => {
        console.log(error);
        this.userPlaces.set(prevPlaces);
        return throwError(()=> new Error('Failed to Remove selected place.'))
      })
    );
    
    
  }
  //
  private fetchPlaces(url: string) {
    return this.httpClient.get<{ places: Place[] }>(url, {
      observe: 'response',
    });
  }
}
