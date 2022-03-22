import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ServiceBoutiquierService } from '../service-boutiquier.service';
import {MessageService} from 'primeng/api';
import swal from 'sweetalert2'
import { ServiceBoutiqueService } from 'src/app/boutique/service-boutique.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-boutiquier',
  templateUrl: './list-boutiquier.component.html',
  styleUrls: ['./list-boutiquier.component.scss'],
  providers: [MessageService]
})
export class ListBoutiquierComponent implements OnInit {
  p: number = 1;
  searchText: any;
  listeBoutiquier : any[]=[];
  boutique:any;
  id: any;
  loginData : any;
  taille: any[]=[];
  nombre:any;
  teste:any;
  valider:boolean=false;
  constructor(public service: ServiceBoutiquierService,
    private messageService: MessageService,
    private serviceBoutique:ServiceBoutiqueService,
    private route: ActivatedRoute,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getAllBoutiquier();

    
  }
listBoutique(){
  this.id = this.route.snapshot.params['id'];
    this.serviceBoutique.BoutiqueById(this.id).subscribe((data: any)=>{
    this.boutique = JSON.parse(data);
    console.log("okkkkkkkkkkkkkkk",this.boutique);
    
    });
}
  getAllBoutiquier(){
    this.listeBoutiquier=[];
    this.service.getAllBoutiquier().subscribe((data:any)=> {
      console.log(data);
      this.listeBoutiquier= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeBoutiquier);
  }


  public ckeickData(id:any){

    this.serviceBoutique.BoutiqueById(id).subscribe((data: any)=>{
      console.log(data);
 this.nombre= data.length;
      console.log(this.nombre);
      

  if(this.nombre==0){
    this.valider=false;
    console.log("Voulez vous supprimer le boutiquier ???");
    
    swal.fire({
      title: 'Attention !!!',
        text: " Voulez vous supprimer le boutiquier ???",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#2D6000',
        cancelButtonColor: '#2D6000',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this.openConfirmationDialog(id);
   
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) { }
    })
   
  }
  else
  {
    this.valider=true;
    console.log("Le boutiquier a des boutiques !!!");

    swal.fire({
      title: 'Attention !!!',
        text: " Ce boutiquier possede des boutiques !!!",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#2D6000',
        cancelButtonColor: '#2D6000',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this.openConfirmationDialog(id);
   
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) { }
    })
    
  }
});
}
  public openConfirmationDialog(id:any) {
    if(!this.valider){
      this.service.deleteBoutiquier(id).subscribe((data)=>{
        console.log(data); 
        this.getAllBoutiquier();
      })
    }
else
{
  this.service.desactiverBoutiquier(id).subscribe(data=>{
    console.log("okkkkkkk",data);
    
  })
}  
  }

  onConfirm(id:any){
    swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer cet Boutiquier ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#2D6000',
        cancelButtonColor: '#2D6000',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this.openConfirmationDialog(id);
    swal.fire(
      'Supprimer!',
      'Admin est supprimé avec succès.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === swal.DismissReason.cancel
  ) {
    swal.fire(
      'Annuler',
      'Vous avez annulé la suppression',
      'error'
    )
  }
    })
  }
  

}
