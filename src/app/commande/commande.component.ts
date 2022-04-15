import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {

  photo = environment.produit;

  constructor(
    private modalController: ModalController,
    ) { }

  ngOnInit() {
    this.photo;
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

}
