import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  QueryList
} from "@angular/core";

@Component({
  selector: "app-select02",
  templateUrl: "./select02.component.html",
  styleUrls: ["./select02.component.css"]
})
export class Select02Component implements OnInit {
  @ViewChild("#countyHandle")
  countyLoaded: QueryList<any>;

  countries = [];
  selectedCountry = 0;
  selectedState = 0;
  selectedCity = 0;

  title = "app";
  states = [];
  cities = [];
  userDefault: DefaultSelections;
  stateFirstPass = true;
  counryFirstPass = true;
  cityFirstPass = true;
  constructor() {
    this.userDefault = new DefaultSelections();
  }

  ngOnInit() {
    this.userDefault.country = 2;
    this.userDefault.state = 4;
    this.countries = this.getCountries();
  }

  ngAfterViewInit() {
    //  console.log("in ngAfterViewInit() ");
    // this.countyLoaded.changes.subscribe(t => {
    //   this.ngForRendred();
    // })
  }

  // ngForRendred() {
  //   console.log("NgFor is Rendered");
  // }

  countryCallFunction(country_id) {
    console.log("in countryCallFunction() ");

    if (this.counryFirstPass) {
      // Do all the things with the stuff
      this.counryFirstPass = false; // set it to false until you need to trigger again
      this.selectedCountry = this.userDefault.country;
      this.cities = [];
      this.states = this.getStates().filter(item => {
        return item.country_id === Number(country_id);
      });
    }
  }

  callFunctionState(stateId) {
    console.log("in callFunctionState() ");

    if (this.stateFirstPass && this.counryFirstPass == false) {
      // Do all the things with the stuff
      this.stateFirstPass = false; // set it to false until you need to trigger again
      this.selectedState = this.userDefault.state;
      this.selectedState = stateId;
      this.cities = this.getCity().filter(item => {
        return item.state_id === Number(stateId);
      });
    }
  }

  callFunctionCity(cityid) {
    console.log("callFunctionCity");
    if (this.cityFirstPass && this.stateFirstPass == false) {
      this.cityFirstPass=false;
      this.selectedCity=this.userDefault.city;
    }
  }

  onSelectCountry(country_id: number) {
    console.log("Country Select changed");
    console.log(this.selectedCountry);
    //  this.selectedCountry = country_id;
    // this.selectedState = 1;
    this.selectedState=0;
    this.selectedCity=0;
    this.cities = [];
    this.states = this.getStates().filter(item => {
      return item.country_id === Number(country_id);
    });
  }

  onSelectCountryModelChange(e) {
    console.log("Country Model changed");
  }

  onSelectState(state_id: number) {
    console.log("State Select changed");
    console.log(this.selectedState);
    // this.selectedState = state_id;
    // this.cities = this.getCity().filter((item) => {
    //   return item.state_id === Number(state_id)
    // });
    // this.selectedState=1;
  }

  getCountries() {
    return [
      { id: 1, name: "India" },
      { id: 2, name: "USA" },
      { id: 3, name: "Australia" }
    ];
  }

  getStates() {
    return [
      { id: 1, country_id: 1, name: "Andhra Pradesh" },
      { id: 2, country_id: 1, name: "Madhya Pradesh" },
      { id: 3, country_id: 2, name: "San Francisco" },
      { id: 4, country_id: 2, name: "Los Angeles" },
      { id: 5, country_id: 3, name: "New South Wales" },
      { id: 6, country_id: 3, name: "Victoria" }
    ];
  }

  getCity() {
    return [
      { id: 1, state_id: 1, name: "Guntur" },
      { id: 2, state_id: 1, name: "Vijayawada" },
      { id: 3, state_id: 1, name: "Nellore" },
      { id: 4, state_id: 1, name: "Kadapa" },
      { id: 5, state_id: 2, name: "Warangal" },
      { id: 6, state_id: 2, name: "Hyderabad" },
      { id: 7, state_id: 2, name: "Karimnagar" },
      { id: 8, state_id: 2, name: "Kadapa" },
      { id: 9, state_id: 3, name: "SOMA" },
      { id: 10, state_id: 3, name: "Richmond" },
      { id: 11, state_id: 3, name: "Sunset" },
      { id: 12, state_id: 4, name: "Burbank" },
      { id: 13, state_id: 4, name: "Hollywood" },
      { id: 14, state_id: 5, name: "Sunset" },
      { id: 15, state_id: 5, name: "Burbank" },
      { id: 16, state_id: 5, name: "Hollywood" },
      { id: 17, state_id: 6, name: "Benalla" },
      { id: 18, state_id: 6, name: "Melbourne" }
    ];
  }
}

export class DefaultSelections {
  country: number = -1;
  state: number = -1;
  city: number = -1;
}
