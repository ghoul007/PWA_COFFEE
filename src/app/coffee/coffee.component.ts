import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router'
import { Coffee } from '../logic/Coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  tastingEnabled: boolean = false;
  coffee: Coffee;
  types = ['Expresso', 'Americano', 'Cappucino']
  routingSubscription: any;
  constructor(
    private route: ActivatedRoute,
    private geolocationService: GeolocationService,
    private data: DataService,
    private router: Router
  ) { }


  tastingRatingChaned(checked: Boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating()
    } else {
      this.coffee.tastingRating = null;
    }
  }


  cancel() {
    this.router.navigate(["/"]);
  }

  save() {
    this.data.save(this.coffee, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }


  ngOnInit() {
    this.coffee = new Coffee()

  
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            if (params["id"]) {
              this.data.get(params["id"], response => {
                this.coffee = response;
                if (this.coffee.tastingRating) {
                  this.tastingEnabled = true;
                }
              });
            }
        });


    this.geolocationService.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    })
  }

  ngOnDestroy(): void {
    this.routingSubscription.unsubscribe()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

}
