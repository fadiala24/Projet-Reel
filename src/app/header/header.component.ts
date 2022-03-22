import { Component, OnInit } from '@angular/core';
import { ServiceBoutiqueService } from '../boutique/service-boutique.service';
import { ServiceBoutiquierService } from '../boutiquier/service-boutiquier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admin: any;
  adminConnect: any;
  boutAttente: any= [];
  nbreAttente = 0;

  constructor(
    private service : ServiceBoutiqueService
    ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)

    this.service.getAllBoutique().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "DESACTIVER"){
          this.boutAttente.push(data[i]);
        }
      }
        this.nbreAttente = this.boutAttente.length
    })
  }

}
