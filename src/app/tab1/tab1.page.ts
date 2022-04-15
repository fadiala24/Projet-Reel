import { Component, OnInit } from '@angular/core';
import { IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ServicesService } from '../services.service';
import { ToastController } from '@ionic/angular';
import { DetailProduit1Component } from '../detail-produit1/detail-produit1.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slideOptions = {
    speed: 1000,
    loop: true,
  };

  filterTerm: string;
  cp: number = 1;

  liste: any;
  photo = environment.produit;
  detail: any;
  client: any;
  boutiquier: any;

  constructor(
    private service: ServicesService, 
    public toastController: ToastController, 
    private modalController: ModalController, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.produits();
    this.photo;
    this.client = JSON.parse(localStorage.getItem('client'));
    this.boutiquier = JSON.parse(localStorage.getItem('boutiquier'));
  }

  slidesDidLoad(slides: IonSlides):void {
    slides.startAutoplay();
  }

  produits(){
    this.service.listeProduits().subscribe((data:any)=> {
      this.liste = data;
    })
  }

  async settings(data: any) {
    console.log(data);
    this.service.detailProduit(data);
    this.detail = data;
    const modal = await this.modalController.create({
      component: DetailProduit1Component,
      componentProps: { det: this.detail },
      cssClass: 'setting-modal',
      backdropDismiss: false,
      
    });

    modal.present();
  }

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

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
