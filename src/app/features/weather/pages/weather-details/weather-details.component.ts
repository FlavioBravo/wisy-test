import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/wheater.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent {

  forecastObject: any = null;

  constructor(
    private activedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    const cityId = this.activedRoute.snapshot.paramMap.get('cityId');
    if (cityId) {
      this.weatherService
        .getForecastByCity(cityId)
        .subscribe((res) => this.forecastObject = res.properties);
    }
  }
}
