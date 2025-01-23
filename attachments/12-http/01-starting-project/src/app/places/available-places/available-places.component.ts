import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../places.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  onSelectPlaces(selectedPlace: Place) {
   const subscripion = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
        next: (resData) => console.log(resData),
      });

      this.destroyRef.onDestroy(()=>{
        subscripion.unsubscribe();
      });
  }

  private placesService = inject(PlacesService);

  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.isFetching.set(true);

    const subscription = this.placesService.loadAvailablePlaces().subscribe({
        next: (res) => {
          const placesData = res.body?.places;
          this.places.set(placesData);
          console.log(placesData);
        },
        complete: () => {
          this.isFetching.set(false);
        },
        error: (error) => {
          console.log(error);
          this.error.set(
            'Something went wrong fetching the available places. Please try again later'
          );
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
