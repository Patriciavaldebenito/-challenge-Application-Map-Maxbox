import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'job-Application-pv';
  // setting 
  map: mapboxgl
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 39.390897;
  lng = -99.066067;


  constructor (public dataService: DataService){
    (mapboxgl as any ).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    var map = new mapboxgl.Map({
      container: 'map', // Specify the container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Specify which map style to use
      center: [-74.016133, 40.640771], // Specify the starting position
      zoom: 10, // Specify the starting zoom
    });
   // this.initializeMap();
  }
}

  





