import { Component, OnInit } from '@angular/core';
import { CityDTO } from 'src/model/city.dto';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities: CityDTO[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.findAll().subscribe(response => {
      this.cities = response;
    }, error => {})
  }

}
