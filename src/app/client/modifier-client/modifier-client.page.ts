import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.page.html',
  styleUrls: ['./modifier-client.page.scss'],
})
export class ModifierClientPage implements OnInit {

  id: any;
  client: any;
  user: any;

  constructor(
    private service: ServiceClientService,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user = JSON.parse(localStorage.getItem('client'));
    this.service.detailClient(this.id).subscribe((data:any)=> {
      this.client = data;
      console.log(data);
    })
  }

  modifier(update:NgForm) {
    if(update.valid) {
      this.service.modifierClient(this.client.id, update.value).subscribe((data:any)=> {
        update.reset();
        console.log(data);
      })
      this.presentToast();
      this.router.navigateByUrl('accueil-client');
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
