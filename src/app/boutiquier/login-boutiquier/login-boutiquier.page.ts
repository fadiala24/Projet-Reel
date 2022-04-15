import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-login-boutiquier',
  templateUrl: './login-boutiquier.page.html',
  styleUrls: ['./login-boutiquier.page.scss'],
})
export class LoginBoutiquierPage implements OnInit {

  user: any;

  constructor(
    private service: ServiceBoutiqueService, 
    private route: Router,
    private toastController: ToastController,
    private loading: LoadingController
    ) {
    this.user = JSON.parse(localStorage.getItem('boutiquier'));
   
   }

  ngOnInit() {
  }

  // logForm(form){
  //   this.service.authBoutiquier(form.login, form.password).subscribe((data:any)=>{
  //     if(data!=null){
  //       localStorage.setItem('boutiquier', JSON.stringify(data));
  //       this.route.navigateByUrl('acceuil-boutiquier');
  //       this.presentToast();
  //     } else {
  //       this.presentToast1();
  //     }
  //   })
  // }

  async logForm(form){

    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Veuillez patienter...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');

    this.service.authBoutiquier(form.login, form.password).subscribe((data:any)=>{
          if(data!=null){
            localStorage.setItem('boutiquier', JSON.stringify(data));
            this.route.navigateByUrl('acceuil-boutiquier');
            this.presentToast();
          } else {
            this.presentToast1();
          }
        })
  }
  

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Connexion reussie',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Identifiants incorrects',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

}
