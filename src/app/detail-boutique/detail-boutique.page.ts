import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServicesService } from '../services.service';
import { IonSlides, ModalController, NavParams} from '@ionic/angular';
import { DetailProduit2Component } from '../detail-produit2/detail-produit2.component';

@Component({
  selector: 'app-detail-boutique',
  templateUrl: './detail-boutique.page.html',
  styleUrls: ['./detail-boutique.page.scss'],
})
export class DetailBoutiquePage implements OnInit {

  liste: any;
  slideOptions = {
    speed: 1000,
    loop: true,
  };
  photo = environment.produit;

  filterTerm: string;
  cp: number = 1;
  detail: any;
  id: any;
  bout: any;
  client: any;
  boutiquier: any;

  
  constructor
  (private service: ServicesService, 
  private modalController: ModalController,
  private route: ActivatedRoute,
  private router: Router
  ) {
   
   }

  ngOnInit() {
    this.client = JSON.parse(localStorage.getItem('client'));
    this.boutiquier = JSON.parse(localStorage.getItem('boutiquier'));
    this.photo;
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
   this.service.produitBoutique(this.id).subscribe((data:any)=> {
     this.liste = data;
     console.log(data);
   })
   this.service.BoutiqueDetail(this.id).subscribe((data:any)=> {
     this.bout = data;
     console.log(data);
   })
  }

  slidesDidLoad(slides: IonSlides):void {
    slides.startAutoplay();
  }


async settings(data: any) {
  console.log(data);
  this.service.detailProduit(data);
  this.detail = data;
  const modal = await this.modalController.create({
    component: DetailProduit2Component,
    componentProps: { det: this.detail },
    cssClass: 'setting-modal',
    backdropDismiss: false,
    mode: 'ios',
  });
  modal.present();
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
