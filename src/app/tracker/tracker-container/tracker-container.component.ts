import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html'
})
export class TrackerContainerComponent implements OnInit {

  constructor(
    private service: TrackerService
  ) { }

  ngOnInit(): void {
    this.service.getMapLocation().subscribe((data) => {
      if (data)
        console.log(data)
    })
  }

}
