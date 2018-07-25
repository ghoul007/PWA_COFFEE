import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PlaceLocation } from './logic/PlaceLocation';
@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  requestLocation(callback) {
    navigator.geolocation.getCurrentPosition(position => {
      callback(position.coords);
    },
      error => {
        callback(null);

      }
    )
  }

  getMapLink(location: PlaceLocation) {
    let query = "";
    if (location.latitude) {
      query = location.latitude + "," + location.longitude;
    } else {
      query = `${location.address}, ${location.city}`
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return 'https://maps.apple.com/?q=${query}'
    } else {
      return 'https://maps.google.com/?q=${query}'

    }
    // <a href="https://maps.google.com/?q=Eiffel+Tower" >
    // <a href="https://maps.google.com/?q=34.55,45.222" >
  }
}
