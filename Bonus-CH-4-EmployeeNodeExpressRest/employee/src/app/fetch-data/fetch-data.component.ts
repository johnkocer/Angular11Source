import { Component, OnInit, Inject } from "@angular/core";
import { FetchdataService, WeatherForecast } from "../fetchdata.service";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];

  constructor( @Inject('BASE_URL') baseUrl: string,
    private fechdataService: FetchdataService) {}

  ngOnInit() {
    this.getWeatherForecasts();
  }

  getWeatherForecasts() {
    this.fechdataService.getWeatherForecasts().subscribe(
      (data: WeatherForecast[]) => {
        console.log('found WeatherForecast' + data);
        this.forecasts = data;
      },
      error => {
        console.log('could not get WeatherForecast', error);
      }
    );
  }
}
