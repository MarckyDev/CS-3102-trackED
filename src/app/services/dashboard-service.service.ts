import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  //injects the http url nung api
  constructor(private http: HttpClient) { }

  //Get Api information here for function calls

  getGoogleCalendarInfo() { }
}
