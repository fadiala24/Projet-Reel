import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { CommandeComponent } from 'src/app/commande/commande.component';
import { ServicesService } from 'src/app/services.service';
import { environment } from 'src/environments/environment';
import { ModifierClientPage } from '../modifier-client/modifier-client.page';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.page.html',
  styleUrls: ['./accueil-client.page.scss'],
})
export class AccueilClientPage implements OnInit {

  private segment: string = 'panier';
  user: any;
  nom: any;
  prenom: any;
  password: any;
  paniers: any;
  cl: any;
  detail: any;
  photo = environment.client;

   constructor(
     private service: ServiceClientService, 
     private route: Router, 
     private alertCtrl: AlertController, 
     private toastController: ToastController, 
     private modalController: ModalController,
     private loading: LoadingController,
     private service1: ServicesService
     ) { 
    this.user = JSON.parse(localStorage.getItem('client'));
    if(this.user==null){
       this.route.navigateByUrl('/login-client');
    } else {
      this.route.navigateByUrl('/accueil-client')
    }
  }

  ngOnInit() {
    this.photo;
    this.user = JSON.parse(localStorage.getItem('client'));
    this.panier();
    this.client();
  }
  client() {
    this.service.detailClient(this.user.id).subscribe((data:any)=> {
      this.cl = data;
    })
  }

  segmentChanged(event:any){
    this.segment=event.target.value;
  }

  remove(user) {
    return this.user = localStorage.removeItem('client');
  }

  panier(){
    this.service.listepanier().subscribe((data:any)=> {
      this.paniers = data;
    })
  }

  async presentConfirm(id) {
    let alert = this.alertCtrl.create({
      message: 'Voulez-vous vous deconnecter ?',
      mode: 'ios',
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
      mode: 'ios'
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

  async presentToast1() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Commande annulée avec succès',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }


  async settings() {
    const modal = await this.modalController.create({
      component: ModifierClientPage,
      componentProps: { data: this.user },
      backdropDismiss: false,
      mode: 'ios',
    });

    modal.present();
  }

  async presentConfirm1(id) {
    let alert = this.alertCtrl.create({
      message: 'Voulez-vous annuler cette commande ?',
      mode: 'ios',
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
          handler: async _data => {
            //Call you API to remove Items here.
            const loading = await this.loading.create({
              cssClass: 'my-custom-class',
              message: 'Veuillez patienter...',
              duration: 2000,
              mode: 'ios'
            });
            await loading.present();
        
            const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.service.annuler(id).subscribe((data)=> {
              this.presentToast1();
              this.panier();
            })
          }
        }
      ]
    });
    (await alert).present();
  }
  

  async settings1(data: any) {
    console.log(data);
    this.service1.detailProduit(data);
    this.detail = data;
    const modal = await this.modalController.create({
      component: CommandeComponent,
      componentProps: { det: this.detail },
      cssClass: 'setting-modal',
      backdropDismiss: false,
      
    });

    modal.present();
  }

}
