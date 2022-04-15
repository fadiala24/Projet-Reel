import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet.locatecontrol';
import { ServicesService } from '../services.service';
import Geocoder from 'leaflet-control-geocoder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  map: Leaflet.Map;
  propertyList = [];
  client: any;
  boutiquier: any;

  constructor(
    private service: ServicesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('client'));
    this.boutiquier = JSON.parse(localStorage.getItem('boutiquier'));
  }

  ionViewDidEnter() {
    this.map = new Leaflet.Map('mapId').setView([12.630432, -8.0304374], 16);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3JheWhhbWlsdG9uIiwiYSI6ImNpbHFxZmFpNzA4bW52dmx5eTY5YW5ia2EifQ.hoCUaTVuAJqLlSchwzwAGQ', {
      
    }).addTo(this.map);
    Leaflet.control.locate().addTo(this.map);

    

    // const GeocoderControl = new Geocoder();
    // GeocoderControl.addTo(this.map);
    // GeocoderControl.on('markgeocode', function (e) {
    // console.log(e)
    // })

    // fetch('./assets/data.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.propertyList = data.properties;
    //     this.leafletMap();
    //   })
    //   .catch(err => console.error(err));
    
    this.service.listeBoutique().subscribe((data:any)=> {
      this.propertyList = data;
      this.leafletMap();
      console.log(data);
    })

  }

  leafletMap() {
    for (const property of this.propertyList) {
      Leaflet.marker([property.latitude, property.longitude]).addTo(this.map)
        .bindPopup(property.nom)
        .openPopup();
    }
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  test() {
    setTimeout(() => {
      if(this.client) {
        this.router.navigateByUrl('/accueil-client')
      } else {
        this.router.navigateByUrl('/login-client')
      }
    }, 500)
  }

  test1() {
    setTimeout(() => {
      if(this.boutiquier) {
        this.router.navigateByUrl('/acceuil-boutiquier')
      } else {
        this.router.navigateByUrl('/login-boutiquier')
      }
    }, 500)
  }

}
