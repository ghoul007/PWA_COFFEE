import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
