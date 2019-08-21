import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'job-Application-pv';
  // setting 
  map: mapboxgl
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 39.390897;
  lng = -99.066067;


  setPoint: any;
  element: any;

  constructor(public dataService: DataService) {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }



  ngOnInit() {
    // Initializing mapbox with token
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 3,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add first marker in MexiciCity
    let marker = new mapboxgl.Marker(this.element)
      .setLngLat({
        lat: 19.42847,
        lng: -99.12766
      })
      .addTo(this.map)


     
  }

  ngAfterViewInit() {
    this.getStore()
  }
  getStore(){
    this.dataService.getStore()
      .subscribe(data => console.log(data ));
  }



}











