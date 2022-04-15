import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AjoutStockPage } from '../ajout-stock/ajout-stock.page';
import { DetailStockPage } from '../detail-stock/detail-stock.page';
import { ModifierStockPage } from '../modifier-stock/modifier-stock.page';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-stock-boutique',
  templateUrl: './stock-boutique.page.html',
  styleUrls: ['./stock-boutique.page.scss'],
})
export class StockBoutiquePage implements OnInit {

  id: any;
  list: any;
  boutique: any;
  user: any;
  bout: any;
  detail: any;
  detail1: any;
  bout1: any;
  produit: any;

  constructor(
    private service: ServiceBoutiqueService,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {                                                  
    this.id = this.route.snapshot.params['id'];
    this.boutiqueId();
  }
    
    boutiqueId() {
      this.service.produitBoutique(this.id).subscribe((data:any)=> {
        this.produit = data;
        console.log('hs', data)
      })
    }

  
   //Used for Confirmation message
    async presentConfirm(id) {
      let alert = this.alertCtrl.create({
        message: 'Voulez-vous supprimer ce produit ?',
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
              this.service.deleteProduit(id).subscribe((data:any)=>{
                console.log('produit supprimé!');
                this.boutiqueId();
                this.presentToast();
              })
            }
          }
        ]
      });
      (await alert).present();
    }

    async presentToast() {
      const toast = await this.toastController.create({
        icon: 'checkmark',
        message: 'Produit supprimé avec succès',
        duration: 2000,
        position: 'top',
        cssClass: 'danger',
        mode: 'ios',
      });
      toast.present();
    }

    async settings() {
      const modal = await this.modalController.create({
        component: AjoutStockPage,
        componentProps: { det1: this.bout1 },
        backdropDismiss: false,
        mode: 'ios',
      });
      modal.present();
    }

    async settings1(data: any) {
      console.log(data);
      this.service.detailProduit(data);
      this.detail = data;
      const modal = await this.modalController.create({
        component: DetailStockPage,
        componentProps: { det: this.detail },
        cssClass: 'setting-modal',
        backdropDismiss: false,
        mode: 'ios',
      });
  
      modal.present();
    }

    async settings2(data: any) {
      console.log(data);
      this.service.detailProduit(data);
      this.detail1 = data;
      const modal = await this.modalController.create({
        component: ModifierStockPage,
        componentProps: { det: this.detail1 },
        backdropDismiss: false,
        mode: 'ios',
      });
  
      modal.present();
    }

}
