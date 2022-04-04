import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { environment } from 'src/environments/environment';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-boutique-attente',
  templateUrl: './boutique-attente.component.html',
  styleUrls: ['./boutique-attente.component.scss']
})
export class BoutiqueAttenteComponent implements OnInit {
  p: number = 1;
  boutiqueAttente: any= [];
  searchText="";
  photo= environment.photo;
  constructor(
    public service: ServiceBoutiqueService, 
  ) { }

  ngOnInit(): void {
    this.service.getAllBoutique().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "DESACTIVER"){
          this.boutiqueAttente.push(data[i]);
        }
      }
    });
    this.photo;
  }
}

