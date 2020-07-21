import { Component, OnInit, ViewChild } from '@angular/core';
import { CountrydetailsComponent } from '../countrydetails/countrydetails.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public selectedCountry: any;
  @ViewChild(CountrydetailsComponent, { static: true })
  countrydetailsComponent: CountrydetailsComponent;
  constructor() {}

  ngOnInit(): void {}

  selectedCountryChanged(country) {
    this.selectedCountry = country;
    this.countrydetailsComponent.selectedCountryChanged(country);
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
