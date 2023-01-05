import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  public apiLatLoong = 'http://ipwho.is/'

  constructor(
    private http:HttpClient
  ) { }

  public getMapLocation():Observable<any>{
    return this.http.get<any>(`${this.apiLatLoong}`)
  }

  public getLatLong(ip: any): Observable<any>{
    return this.http.get<any>(`${this.apiLatLoong}/${ip}`)
  }
}
