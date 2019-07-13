import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cityForm = this.formBuilder.group({
    name: ['']
  })
  
  constructor(
    private formBuilder: FormBuilder, 
    private cityService: CityService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.cityService.insert(this.cityForm.value).subscribe(response => {
      alert('Cidade cadastrada!');
      window.location.reload();
    }, error => {});
  }
}
