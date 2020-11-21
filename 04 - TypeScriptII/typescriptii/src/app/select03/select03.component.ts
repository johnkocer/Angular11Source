import { Component, OnInit,  ViewChild,  AfterViewInit,  QueryList} from '@angular/core';

@Component({
  selector: 'app-select03',
  templateUrl: './select03.component.html',
  styleUrls: ['./select03.component.css']
})
export class Select03Component implements OnInit {
  @ViewChild("#countyHandle")
  countyLoaded: QueryList<any>;

  countries = [];
  selectedCountry:Country;
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
    this.userDefault.country = { id: 2, name: "USA" };
    this.userDefault.state = 4;
    this.countries = this.getCountries();
  }


  countryCallFunction(countryId) {
    console.log("in countryCallFunction() ");

    if (this.counryFirstPass) {
      // Do all the things with the stuff
      this.counryFirstPass = false; // set it to false until you need to trigger again
      this.selectedCountry = this.countries.find( c => c.id == 2);
      this.cities = [];
      this.states = this.getStates().filter(item => {
        return item.countryId === Number(countryId);
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
        return item.stateId === Number(stateId);
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

  onSelectCountry(countryId: number) {
    console.log("Country Select changed");
    console.log(this.selectedCountry);
    //  this.selectedCountry = countryId;
    // this.selectedState = 1;
    this.selectedState=0;
    this.selectedCity=0;
    this.cities = [];
    this.states = this.getStates().filter(item => {
      return item.countryId === Number(countryId);
    });
  }

  onSelectCountryModelChange(e) {
    console.log("Country Model changed");
  }

  onSelectState(stateId: number) {
    console.log("State Select changed");
    console.log(this.selectedState);
    // this.selectedState = stateId;
    // this.cities = this.getCity().filter((item) => {
    //   return item.stateId === Number(stateId)
    // });
    // this.selectedState=1;
  }

  getCountries() {
    const countries: Country[]=
    [
      { id: 1, name: "India" },
      { id: 2, name: "USA" },
      { id: 3, name: "Australia" }
    ];
    return countries;
  }

  compareCountry(a: Country, b: Country) {
    if (a && b) {
      console.log(a.id);
      console.log(b.id);
    }
    return a && b && a.id == b.id;
  }
  getStates() {
    return [
      { id: 1, countryId: 1, name: "Andhra Pradesh" },
      { id: 2, countryId: 1, name: "Madhya Pradesh" },
      { id: 3, countryId: 2, name: "San Francisco" },
      { id: 4, countryId: 2, name: "Los Angeles" },
      { id: 5, countryId: 3, name: "New South Wales" },
      { id: 6, countryId: 3, name: "Victoria" }
    ];
  }

  getCity() {
    return [
      { id: 1, stateId: 1, name: "Guntur" },
      { id: 2, stateId: 1, name: "Vijayawada" },
      { id: 3, stateId: 1, name: "Nellore" },
      { id: 4, stateId: 1, name: "Kadapa" },
      { id: 5, stateId: 2, name: "Warangal" },
      { id: 6, stateId: 2, name: "Hyderabad" },
      { id: 7, stateId: 2, name: "Karimnagar" },
      { id: 8, stateId: 2, name: "Kadapa" },
      { id: 9, stateId: 3, name: "SOMA" },
      { id: 10, stateId: 3, name: "Richmond" },
      { id: 11, stateId: 3, name: "Sunset" },
      { id: 12, stateId: 4, name: "Burbank" },
      { id: 13, stateId: 4, name: "Hollywood" },
      { id: 14, stateId: 5, name: "Sunset" },
      { id: 15, stateId: 5, name: "Burbank" },
      { id: 16, stateId: 5, name: "Hollywood" },
      { id: 17, stateId: 6, name: "Benalla" },
      { id: 18, stateId: 6, name: "Melbourne" }
    ];
  }
}

export class DefaultSelections {
  country: Country ;
  state: number = -1;
  city: number = -1;
  constructor(){
    this.country= { id: 2, name: "USA" };
  }
}

export class Country{
  id:number;
  name:string;
}
export class Sate{
  id:number;
  countryId:number;
  name:string;
}

export class City{
  id:number;
  stateId:number;
  name:string;
}
