import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList() {
    const list = [
      new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
      new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    ];

  }


  save(coffe, callback) {
    //TODO: save with Webservice
  }

}
