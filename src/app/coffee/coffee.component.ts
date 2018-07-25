import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  routerSubscription: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);

    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe()
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
