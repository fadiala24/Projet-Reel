import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-modifier-boutiquier',
  templateUrl: './modifier-boutiquier.page.html',
  styleUrls: ['./modifier-boutiquier.page.scss'],
})
export class ModifierBoutiquierPage implements OnInit {
  user: any;
  boutiquier: any;
  id: this;

  constructor(
    private service: ServiceBoutiqueService,  
    private router: Router, 
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
    this.user = JSON.parse(localStorage.getItem('boutiquier'));
    this.service.detailBoutiquier(this.id).subscribe((data:any)=> {
      this.boutiquier = data;
    })
    // this.router.navigateByUrl('/acceuil-boutiquier');
  }

  modifier(update:NgForm) {
    if(update.valid) {
      this.service.updateBoutiquier(this.boutiquier.id, update.value).subscribe((data:any)=> {
        update.reset();
      })
      this.presentToast();
      this.router.navigateByUrl('/acceuil-boutiquier')
    }
  } 

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Modification effectuée avec succèss',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }
}
