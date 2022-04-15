import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commande1',
  templateUrl: './commande1.component.html',
  styleUrls: ['./commande1.component.scss'],
})
export class Commande1Component implements OnInit {

  photo = environment.produit;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.photo;
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

}
