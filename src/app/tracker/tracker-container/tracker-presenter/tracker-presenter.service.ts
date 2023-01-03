import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TrackerPresenterService {

  private ipAddress:Subject<any>;
  public ipAddress$:Observable<any>;
  
  constructor(
    private fb:FormBuilder
  ) { 
    this.ipAddress = new Subject();
    this.ipAddress$ = new Observable();
    this.ipAddress$ = this.ipAddress.asObservable();
  }

  public getGroup(){
    return this.fb.group({
      ip:['']
    })
  }

  public getData(data:any){
    this.ipAddress.next(data)
  }
}
