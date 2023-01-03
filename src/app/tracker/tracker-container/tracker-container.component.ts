import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html'
})
export class TrackerContainerComponent implements OnInit {

  public getLocation$: Observable<any>;
  public getLatLog$: Observable<any>;

  constructor(
    private service: TrackerService
  ) {
    this.getLocation$ = new Observable();
    this.getLatLog$ = new Observable();
  }

  ngOnInit(): void {
  }
  
  public emitIPAddress(value: any) {
    this.getLatLog$ = this.service.getLatLong(value);
    this.getLocation$ = this.service.getMapLocation(value);
  }

}
