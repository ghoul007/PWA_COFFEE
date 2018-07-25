import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  requestLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      // callback(position.coords);
    },
      error => {
        // callback(null);

      }
    )
  }

  getMapLink(location) {
    // <a href="https://maps.google.com/?q=Eiffel+Tower" >
  }
}
