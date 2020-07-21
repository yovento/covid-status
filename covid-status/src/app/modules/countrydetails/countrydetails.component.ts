import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css'],
})
export class CountrydetailsComponent implements OnInit {
  public selectedCountry: any;
  public queryTime: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  public selectedCountryChanged(country) {
    this.selectedCountry = country;
  }
}
