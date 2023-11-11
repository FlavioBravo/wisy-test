import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherDetailsComponent } from './pages/weather-details/weather-details.component';
import { WeatherListComponent } from './pages/weather-list/weather-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreInterceptor } from '../../core/interceptors/core.interceptor';
import { WeatherService } from './services/wheater.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherDetailsComponent,
    WeatherListComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptor,
      multi: true,
    },
    WeatherService,
  ],
})
export class WeatherModule { }
