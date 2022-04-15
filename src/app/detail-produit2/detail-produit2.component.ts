import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PanierPage } from '../client/panier/panier.page';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail-produit2',
  templateUrl: './detail-produit2.component.html',
  styleUrls: ['./detail-produit2.component.scss'],
})
export class DetailProduit2Component implements OnInit {

  photo = environment.produit;
  detail: any;
  tel: any;
  num: any;

  constructor(
    private modalController: ModalController,
    private service: ServicesService,
    private callNumber: CallNumber,
    private nav: NavParams,
       ) { }

  ngOnInit() {
    this.photo;
    this.tel = this.nav.get('det');
    console.log(this.tel);
    this.service.BoutiqueDetail(this.tel.boutiques.id).subscribe((data:any)=> {
      this.num = data;
      console.log(this.num)
    })
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

  async settings(data: any) {
    console.log(data);
    this.service.detailProduit(data);
    this.detail = data;
    const modal = await this.modalController.create({
      component: PanierPage,
      componentProps: { det: this.detail },
      cssClass: 'setting-modal',
      backdropDismiss: false,
    });
    this.dismiss();
    modal.present();
  }

  appel() {
    this.callNumber.callNumber(this.num.boutiquier.telephone, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

}
