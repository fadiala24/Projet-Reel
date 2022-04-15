import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-register-boutiquier',
  templateUrl: './register-boutiquier.page.html',
  styleUrls: ['./register-boutiquier.page.scss'],
})
export class RegisterBoutiquierPage implements OnInit {

  constructor(
    private service: ServiceBoutiqueService,
    private toastController: ToastController
    ) { }

  ngOnInit() {
  }

  ajout(form: NgForm) {
    if(form.valid) {
      this.service.validBoutiquier(form.value).subscribe((data:any)=> {
        if (data === 'login') {
          this.presentToast2();
        } else if (data === 'telephone') {
          this.presentToast3();
        } else {
          this.service.ajoutBoutiquier(form.value).subscribe((data:any)=> {
            console.log(data);
          })
          form.reset();
          this.presentToast();
        }
      })
    } else if(form.invalid) {
      this.presentToast1();
    } else {
      this.presentToast1();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Compte crée avec succèss',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Veuillez bien renseigner le formulaire',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Ce login existe déjà',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Ce numéro de téléphone existe déjà',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }



}
