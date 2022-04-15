import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Commande1Component } from 'src/app/commande1/commande1.component';
import { ServicesService } from 'src/app/services.service';
import { environment } from 'src/environments/environment';
import { ModifierBoutiquierPage } from '../modifier-boutiquier/modifier-boutiquier.page';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-acceuil-boutiquier',
  templateUrl: './acceuil-boutiquier.page.html',
  styleUrls: ['./acceuil-boutiquier.page.scss'],
})
export class AcceuilBoutiquierPage implements OnInit {

  liste:any;
  photo = environment.boutique;
  user:any;
  pan: any;
  cp: number = 1;

  private segment: string = 'boutiques';
  bout: any;
  detail: any;

  constructor(
    private service: ServiceBoutiqueService,
    private route: Router, 
    private alertCtrl: AlertController, 
    private toastController: ToastController, 
    private modalController: ModalController,
    private loading: LoadingController,
    private service1: ServicesService
    
    ) {
      this.user = JSON.parse(localStorage.getItem('boutiquier'));
    if(this.user==null){
       this.route.navigateByUrl('/login-boutiquier');
    } else {
      this.route.navigateByUrl('/acceuil-boutiquier')
    }
    }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('boutiquier'));
    this.boutique();
    this.photo;
    this.panier();
    this.boutiquier();
  }

  boutiquier() {
    this.service.detailBoutiquier(this.user.id).subscribe((data:any)=> {
      this.bout = data;
      console.log('jnc', data)
    })
  }

  segmentChanged(event:any){
    this.segment=event.target.value;
  }

  boutique(){
    this.service.listeBoutique().subscribe((data:any)=> {
      this.liste = data;
      console.log('hgsq', data);
    }) 
  }

  remove(user) {
    return this.user = localStorage.removeItem('boutiquier');
  }

  deco() {
    this.remove(this.user);
    this.route.navigateByUrl('/tabs/tabs/tab1');
  }

  panier(){
    this.service.listepanie().subscribe((data:any)=> {
      this.pan = data;
      console.log( 'de', data);
    })
  }

  async presentConfirm(id) {
    let alert = this.alertCtrl.create({
      message: 'Voulez-vous vous deconnecter ?',
      mode:'ios',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            console.log('Annulé');
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
            //Call you API to remove Items here.
            this.presentLoading();
          }
        }
      ]
    });
    (await alert).present();
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...',
      duration: 2000,
      mode: 'ios',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.remove(this.user);
    this.route.navigateByUrl('/tabs/tabs/tab1');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Déconnexion reussie',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }

  async settings() {
    const modal = await this.modalController.create({
      component: ModifierBoutiquierPage,
      componentProps: { data: this.user },
      backdropDismiss: false,
      mode: 'ios',
    });

    modal.present();
  }

  async settings1(data: any) {
    console.log(data);
    const modal = await this.modalController.create({
      component: Commande1Component,
      componentProps: { det: data },
      cssClass: 'setting-modal',
      backdropDismiss: false,
      
    });

    modal.present();
  }
  

}
