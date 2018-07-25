import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  coffee: Coffee;
  types = ['Expresso', 'Americano', 'Cappucino']
  routerSubscription: any;
  constructor(private route: ActivatedRoute, private geolocationService: GeolocationService) { }


  tastingRatingChaned(checked: Boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating()
    } else {
      this.coffee.tastingRating = null;
    }
  }


  cancel() {

  }

  save() {

  }


  ngOnInit() {
    this.coffee = new Coffee()

    this.routerSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);

    })



    this.geolocationService.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
