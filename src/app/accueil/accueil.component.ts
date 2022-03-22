import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import {MessageService} from 'primeng/api';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {Product} from './product';
import { ServiceBoutiquierService } from '../boutiquier/service-boutiquier.service';
import Swal from 'sweetalert2';
import { bufferToggle, reduce } from 'rxjs';
import { ServiceBoutiqueService } from '../boutique/service-boutique.service';
import { ServiceProduitService } from '../produit/service-produit.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  nombreProduit:any;
  nombreBoutique:any;
  nombreBoutiquier:any;
  boutAttente: any= [];
  searchText="";
  

  loginData :any;
  admin: any;
  adminConnect: any;
  products: Product[];
	
	responsiveOptions;

	constructor(private productService: ProductserviceService,
     private messageService: MessageService,
     private serve : ServiceBoutiquierService,
     private _snackBar: MatSnackBar,
     private serviceBoutique: ServiceBoutiqueService,
     private serviceProduit : ServiceProduitService,
     private serviceBoutiquier : ServiceBoutiquierService,
     ) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 2
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}


  ngOnInit() {

    this.serviceBoutique.nombreBoutique().subscribe(data=>{
      this.nombreBoutique = data;
    })

    this.serviceBoutiquier.nombreBoutiquier().subscribe(data=>{
      this.nombreBoutiquier = data;
    })

    this.serviceProduit.nombreProduit().subscribe(data=>{
      this.nombreProduit = data;
    })
    
    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    this.loginData = JSON.parse(localStorage["userData"]);
    console.log(this.loginData);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'SOYEZ LA BIENVENUE  '  +this.loginData.prenom
    })
    this.serve.getAllBoutiquier().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "DESACTIVER"){
          this.boutAttente.push(data[i]);
        }
      }
    })
    }
    
}
