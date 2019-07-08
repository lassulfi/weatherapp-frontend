import { Component, OnInit, HostBinding } from '@angular/core';
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
    this.fetchData();
  }

  fetchData() {
    this.cityService.findAll().subscribe(response => {
      this.cities = response;
    }, error => {});
  }

  viewDetails(city: CityDTO) {
    this.cityService.findById(city.id).subscribe(response => {
      console.log(response);
    }, error => {

    })
  }

  delete(city: CityDTO) {
    this.cityService.delete(city.id).subscribe(response => {
      alert(`Cidade ${city.name} excluída com sucesso.`);
      this.fetchData();
    }, error => {
      alert("Nao foi possível excluir cidade");
    })
  }

}
