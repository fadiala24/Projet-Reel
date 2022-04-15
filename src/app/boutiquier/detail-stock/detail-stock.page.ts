import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.page.html',
  styleUrls: ['./detail-stock.page.scss'],
})
export class DetailStockPage implements OnInit {

  photo= environment.produit;
  id:any;
  data:any;
  det:any;

  constructor(private service: ServiceBoutiqueService, private nav: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.id = this.nav.get('det')
    console.log(this.id);
    this.detailProduit();
  }

  detailProduit(){
    this.service.detailProduit(this.id).subscribe((data)=>{
      this.det = data;
      console.log(data);
    })
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

}
