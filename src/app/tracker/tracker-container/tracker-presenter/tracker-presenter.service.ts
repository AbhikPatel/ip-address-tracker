import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class TrackerPresenterService {

  constructor(
    private fb:FormBuilder
  ) { }

  public getGroup(){
    return this.fb.group({
      ip:['']
    })
  }
}
