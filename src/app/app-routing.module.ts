import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CityPageComponent } from './city-page/city-page.component';

const routes: Routes = [
  {path: 'cidade', component: CityPageComponent},
  {path: 'cidade/:id', component: WeatherDetailComponent},
  {path: '', redirectTo: '/cidade', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
