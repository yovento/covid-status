import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { CountrieslistComponent } from './modules/countrieslist/countrieslist.component';
import { CountrydetailsComponent } from './modules/countrydetails/countrydetails.component';
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { HttpErrorInterceptor } from './core/services/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountrieslistComponent,
    CountrydetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
