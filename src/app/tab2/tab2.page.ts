import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  slideOptions = {
    speed: 1000,
    loop: true,
  }

  liste: any;
  client: any;
  boutiquier: any;

  constructor(
    private service: ServicesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('client'));
    this.boutiquier = JSON.parse(localStorage.getItem('boutiquier'));
    this.listeVilles();
  }

  slidesDidLoad(slides: IonSlides):void {
    slides.startAutoplay();
  }

  listeVilles() {
    this.service.listeVille().subscribe((data:any)=> {
      this.liste = data;
    })
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
