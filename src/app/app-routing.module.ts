import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule } from './features/weather/weather.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./features/weather/weather.module').then(
        (m): typeof WeatherModule => m.WeatherModule
      ),
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
