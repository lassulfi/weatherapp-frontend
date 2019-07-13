import { Component, OnInit } from '@angular/core';
import { ForecastDTO } from 'src/model/forecast.dto';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  forecast: ForecastDTO;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  fetchData() {
    //this.cityService.findById()
  }

}
