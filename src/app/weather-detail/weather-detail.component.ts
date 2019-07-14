import { Component, OnInit } from '@angular/core';
import { ForecastDTO } from 'src/model/forecast.dto';
import { CityService } from 'src/services/city.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  forecast: ForecastDTO;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.fetchData(id);
  }

  fetchData(id: string) {
    this.cityService.findById(id).subscribe(response => {
      this.forecast = response;
    });
  }

  goToCities() {
    this.router.navigate(['/cidade']);
  }
}
