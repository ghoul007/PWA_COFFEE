import { Injectable } from '@angular/core';
import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(coffeeId: string, callback) {
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
      .subscribe((response: any) => {
        callback(response);
      })
  }


  getList(callback) {
    // const list = [
    //   new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
    //   new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    // ];
    // callback(list)

    this.http.get(`${this.endpoint}/coffees`).subscribe(res => {
      callback(res)
    })
  }


  save(coffee, callback) {
    if (coffee._id) {
      // It's an update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}
