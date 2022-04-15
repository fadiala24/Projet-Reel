import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {

  user: any;

  constructor(
    private service: ServiceClientService,
    private route: Router, 
    private toastController: ToastController,
    private loading: LoadingController
    ) { 
    this.user = JSON.parse(localStorage.getItem('client'));
  }

  async presentLoading() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
   
  }

  // logForm(form){
  //   this.service.authClient(form.login, form.password).subscribe((data:any)=>{
  //     if(data!=null){
  //       localStorage.setItem('client', JSON.stringify(data));
  //       this.route.navigateByUrl('/accueil-client');
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
    this.service.authClient(form.login, form.password).subscribe((data:any)=>{
          if(data!=null){
            localStorage.setItem('client', JSON.stringify(data));
            this.route.navigateByUrl('/accueil-client');
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
