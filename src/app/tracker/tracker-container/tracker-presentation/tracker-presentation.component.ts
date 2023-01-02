import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { TrackerService } from '../../tracker.service';
import { TrackerPresenterService } from '../tracker-presenter/tracker-presenter.service';

@Component({
  selector: 'app-tracker-presentation',
  templateUrl: './tracker-presentation.component.html',
  viewProviders: [TrackerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackerPresentationComponent implements AfterViewInit {

  public map: any;
  public mapGroup: FormGroup;
  public lat: number = 1
  public lon: number = 1

  constructor(
    private _tracker: TrackerService,
    private _service: TrackerPresenterService
  ) {
    this.mapGroup = this._service.getGroup();
  }
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 11,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    L.marker([this.lat, this.lon]).addTo(this.map);
  }

  public ngAfterViewInit(): void {
    this.initMap();
  }


  public callAPI() {
    this._tracker.getLatLong(this.mapGroup.value.ip).subscribe(value => {
      this.lat = value.latitude;
      this.lon = value.longitude;
      L.marker([this.lat, this.lon]).addTo(this.map);
      this.map.flyTo([this.lat, this.lon], 15);
      // this.map.setView([this.lat, this.lon], 11);
      // this.map.panTo([this.lat, this.lon]);
    })
  }
}
