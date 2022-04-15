import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-modifier-stock',
  templateUrl: './modifier-stock.page.html',
  styleUrls: ['./modifier-stock.page.scss'],
})
export class ModifierStockPage implements OnInit {

  id: any;
  prod:any

  constructor(
    private service: ServiceBoutiqueService,  
    private toastController: ToastController,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.detailProduit(this.id).subscribe((data:any)=> {
      this.prod = data;
    })
    
  }

  modifier(update:NgForm) {
    if(update.valid) {
      this.service.updateProduit(this.id, update.value).subscribe((data:any)=> {
        console.log(data);
        this.presentToast();
        update.reset();
      })
    } else {
      this.presentToast1();
    }
  } 

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Stock modifié avec succèss',
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
}
