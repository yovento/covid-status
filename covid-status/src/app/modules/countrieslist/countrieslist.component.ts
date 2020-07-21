import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';

@Component({
  selector: 'app-countrieslist',
  templateUrl: './countrieslist.component.html',
  styleUrls: ['./countrieslist.component.css'],
})
export class CountrieslistComponent implements OnInit {
  public countriesArray = [];
  public;

  @Output()
  public selectedCountryChanged: EventEmitter<any> = new EventEmitter();
  public selectedCountry = {
    countryName: '',
    confirmedNewCases: 0,
    confirmedCases: 0,
    confirmedDeaths: 0,
    confirmedNewDeaths: 0,
    confirmedRecovers: 0,
    confirmedNewRecovers: 0,
    globalNewCases: 0,
    globalCases: 0,
    globalDeath: 0,
    globalNewDeath: 0,
    globalRecover: 0,
    globalNewRecover: 0,
    lastUpdate: 0,
  };
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    this.countriesService.getCountries().subscribe(
      (response) => {
        this.countriesArray = response.Countries;

        this.selectedCountry.globalCases = response.Global.TotalConfirmed;
        this.selectedCountry.globalDeath = response.Global.TotalDeaths;
        this.selectedCountry.globalRecover = response.Global.TotalRecovered;

        this.selectedCountry.globalNewCases = response.Global.NewConfirmed;
        this.selectedCountry.globalNewDeath = response.Global.NewDeaths;
        this.selectedCountry.globalNewRecover = response.Global.NewRecovered;

        this.selectCountry('Colombia');
      },
      (error: string) => {
        console.log(error);
      }
    );
  }

  selectCountry(countryName: string) {
    event.preventDefault();
    var selectedCountry = this.countriesArray.find(
      (element) => element.Country == countryName
    );

    this.selectedCountry.countryName = countryName;
    this.selectedCountry.confirmedCases = selectedCountry.TotalConfirmed;
    this.selectedCountry.confirmedDeaths = selectedCountry.TotalDeaths;
    this.selectedCountry.confirmedRecovers = selectedCountry.TotalRecovered;

    this.selectedCountry.confirmedNewCases = selectedCountry.NewConfirmed;
    this.selectedCountry.confirmedNewDeaths = selectedCountry.NewDeaths;
    this.selectedCountry.confirmedNewRecovers = selectedCountry.NewRecovered;

    this.selectedCountryChanged.emit(this.selectedCountry);
  }
}
