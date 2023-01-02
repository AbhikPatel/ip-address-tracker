import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  public api:string = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_zfrxfx4UNJMoh8WH7oleawyQFUHMP&ipAddress=8.8.8.8';
  public apiLatLoong = 'http://ipwho.is/'
  constructor(
    private http:HttpClient
  ) { }

  public getMapLocation():Observable<any>{
    return this.http.get<any>(`${this.api}`)
  }

  public getLatLong(ip: any): Observable<any>{
    return this.http.get<any>(`${this.apiLatLoong}/${ip}`)
  }
}
