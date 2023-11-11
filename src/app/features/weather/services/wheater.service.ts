import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly _routeURL = environment.BASE_URL;

  constructor(private readonly _http: HttpClient) {}

  getForecastByCity(cityId: string): Observable<any> {
    return this._http.get(`${this._routeURL}${cityId}/31,80/forecast`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
