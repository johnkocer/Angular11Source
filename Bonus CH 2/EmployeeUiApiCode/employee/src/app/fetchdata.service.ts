import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  public forecasts: WeatherForecast[];

  constructor() { }

  getWeatherForecasts(): Observable<WeatherForecast[]>{
    let date = new Date();
    this.forecasts =  [
      { dateFormatted: formatDate(date , 'yyyy-MM-dd','en'), temperatureC: 28, summary: "Bracing",temperatureF: 82 },
      { dateFormatted: formatDate(date.setDate(date.getDate() +1) , 'yyyy-MM-dd','en'), temperatureC: 38, summary: "Balmy",temperatureF: 100 },
      { dateFormatted: formatDate(date.setDate(date.getDate() +1) , 'yyyy-MM-dd','en'), temperatureC: 54, summary: "Hot",temperatureF: 129 }
    ];
    return  of( this.forecasts);
  }
}

export interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}
