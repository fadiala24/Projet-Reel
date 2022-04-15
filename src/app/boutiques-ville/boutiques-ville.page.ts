import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DetailBoutiquePage } from '../detail-boutique/detail-boutique.page';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-boutiques-ville',
  templateUrl: './boutiques-ville.page.html',
  styleUrls: ['./boutiques-ville.page.scss'],
})
export class BoutiquesVillePage implements OnInit {

  id: any;
  boutiques: any;
  photo = environment.boutique;
  filterTerm: string;
  detail: any;
  client: any;
  boutiquier: any;

  constructor(
    private service: ServicesService, 
    private router: ActivatedRoute, 
    private modalController: ModalController,
    private route: Router) { }

  ngOnInit() {
    this.client = JSON.parse(localStorage.getItem('client'));
    this.boutiquier = JSON.parse(localStorage.getItem('boutiquier'));
    this.photo;
    this.id = this.router.snapshot.params['id'];
    this.service.BoutiqueVille(this.id).subscribe((data:any)=> {
      this.boutiques = data;
    })
  }

  async settings(data: any) {
    console.log(data);
    const modal = await this.modalController.create({
      component: DetailBoutiquePage,
      componentProps: { det: data },
      backdropDismiss: false,
      mode: 'ios',
    });

    modal.present();
  }

  test() {
    setTimeout(() => {
      if(this.client) {
        this.route.navigateByUrl('/accueil-client')
      } else {
        this.route.navigateByUrl('/login-client')
      }
    }, 500)
  }

  test1() {
    setTimeout(() => {
      if(this.boutiquier) {
        this.route.navigateByUrl('/acceuil-boutiquier')
      } else {
        this.route.navigateByUrl('/login-boutiquier')
      }
    }, 500)
  }

}
