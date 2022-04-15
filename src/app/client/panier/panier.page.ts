import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Panier } from 'src/app/panier';
import { Stock } from 'src/app/stock';
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  user: any;
  id: any;
  produit: any;
  panier = new Panier();
  ajoutb: any;
  stock = new Stock();

  constructor(private service: ServiceClientService, private nav: NavParams, private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('client'));
    this.id = this.nav.get('det');
  }

  ajout(form: NgForm) {
    if(this.user != null) {
      this.panier.quantite = form.value['quantite'];
      this.panier.prix_unitaire = this.id.prix_unitaire * form.value['quantite'];
      this.panier.client = this.user;
      this.panier.produits = this.id;
      if (this.id.quantite < form.value['quantite'] || form.value['quantite'] <= 0 || form.value['quantite'] == null) {
        this.presentToast2();
      } else if(form.invalid) {
        this.presentToast3();
      }
      else {
        this.service.ajoutPanier(this.panier).subscribe((data:any)=> {
          this.ajoutb = data;
          this.stock.boutiques = this.id.boutiques;
          this.stock.category = this.id.category;
          this.stock.nom = this.id.nom;
          this.stock.photos = this.id.photos;
          this.stock.prix_achat = this.id.prix_achat;
          this.stock.prix_unitaire = this.id.prix_unitaire;
          this.stock.quantite = this.id.quantite - this.panier.quantite;
          this.stock.unite = this.id.unite;
          this.service.updateProduit(this.id.id, this.stock).subscribe((data:any)=> {
            console.log(data);
          })
          console.log(this.ajoutb);
          this.dismiss();
          this.presentToast();
        })
      }
    } else {
      this.presentToast1();
    }
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'checkmark',
      message: 'Commande effectuée',
      duration: 2000,
      position: 'top',
      cssClass: 'success',
    });
    toast.present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Veuillez vous connecter pour passer une commande',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Quantité non disponible',
      duration: 2000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      icon: 'close',
      message: 'Veuillez bien renseigner le formulaire',
      duration: 3000,
      position: 'top',
      cssClass: 'danger',
    });
    toast.present();
  }


}
