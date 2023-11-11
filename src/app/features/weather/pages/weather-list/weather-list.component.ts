import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent {
  cityList = [
    {
      id: '',
      name: 'Choose option',
    },
    {
      id: 'LWX',
      name: 'District of Columbia Forecast ( LWX )',
    },
    {
      id: 'TOP',
      name: 'Kansas Forecast ( TOP )',
    },
  ];

  constructor(private router: Router) {}

  onChange(newValue: any): void {
    const cityId: string = newValue.target.value;
    if (cityId) {
      this.router.navigate(['weather/weather-details', cityId]);
    }
  }
}
