import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityService } from 'src/services/city.service';
import { CitiesComponent } from './cities/cities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesListComponent } from './cities-list/cities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitiesListComponent
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
