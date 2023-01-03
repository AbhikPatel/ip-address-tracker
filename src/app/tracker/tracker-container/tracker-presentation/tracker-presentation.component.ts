import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { TrackerPresenterService } from '../tracker-presenter/tracker-presenter.service';

@Component({
  selector: 'app-tracker-presentation',
  templateUrl: './tracker-presentation.component.html',
  viewProviders: [TrackerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackerPresentationComponent implements AfterViewInit, OnInit {


  @Input() public set Location(v: any) {
    if (v)
      this._Location = v;      
  }

  public get Location(): any {
    return this._Location;
  }

  @Input() public set coordinates(v: any) {
    if (v)
      this._coordinates = v;
  }

  public get coordinates(): any {
    return this._coordinates;
  }


  @Output() public emitIPAddress: EventEmitter<any>;

  public map: any;
  public mapGroup: FormGroup;
  public lat: number = 1;
  public lon: number = 1;
  private _Location: any;
  private _coordinates: any;

  constructor(
    private _service: TrackerPresenterService
  ) {
    this.mapGroup = this._service.getGroup();
    this.emitIPAddress = new EventEmitter();
  }

  ngOnInit(): void {
    this._service.ipAddress$.subscribe((data: any) => this.emitIPAddress.emit(data))
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
    this._service.getData(this.mapGroup.value.ip)
    // this._tracker.getLatLong(this.mapGroup.value.ip).subscribe(value => {
    //   this.lat = value.latitude;
    //   this.lon = value.longitude;
    // })
    if (this.coordinates) {
      this.lat = this.coordinates.latitude;
      this.lon = this.coordinates.longitude;
      L.marker([this.lat, this.lon]).addTo(this.map);
      this.map.flyTo([this.lat, this.lon], 15);
      // this.map.setView([this.lat, this.lon], 11);
      // this.map.panTo([this.lat, this.lon]);
    }
  }
}
