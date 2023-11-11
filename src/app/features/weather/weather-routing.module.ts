import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { WeatherListComponent } from './pages/weather-list/weather-list.component';
import { WeatherDetailsComponent } from './pages/weather-details/weather-details.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
    children: [
      {
        path: '',
        component: WeatherListComponent,
      },
      {
        path: 'weather-details/:cityId',
        component: WeatherDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
