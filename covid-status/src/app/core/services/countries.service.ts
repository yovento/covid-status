import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  getCountries(): Observable<any> {
    const serviceUrl: string = 'https://api.covid19api.com/summary';

    return this.httpClient.get(serviceUrl, { headers: this.httpHeaders });
  }
}
