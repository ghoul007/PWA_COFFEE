import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatCardModule, MatSlideToggleModule
} from "@angular/material";
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
