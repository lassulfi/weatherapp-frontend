import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityService } from 'src/services/city.service';
import { CitiesComponent } from './cities/cities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CityPageComponent } from './city-page/city-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesListComponent,
    WeatherDetailComponent,
    PageNotFoundComponent,
    CityPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
