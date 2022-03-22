import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import Swal from 'sweetalert2';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {
  p: number = 1;
  searchText: any;
  listeProduit : any[]=[];
  loginData : any;
  constructor(
    public service: ServiceProduitService,private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.getAllProduit();
  }

  getAllProduit(){
    this.listeProduit=[];
    this.service.getAllProduit().subscribe((data:any)=> {
      console.log(data);
      this.listeProduit= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeProduit);
  }

  deleteProduit(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteProduit(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllProduit();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.service.deleteProduit(id).subscribe((data)=>{
      console.log(data); 
      this.getAllProduit();
    })
  }

  onConfirm(id:any){
    Swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer ce produit ?",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton:false,
        confirmButtonColor: '#2D6000',
        cancelButtonColor: '#2D6000',
        confirmButtonText: 'Je supprime '
}).then((result) => {
  if (result.value) {
    this.openConfirmationDialog(id);
    Swal.fire(
      'Supprimer!',
      'Admin est supprimé avec succès.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    Swal.fire(
      'Annuler',
      'Vous avez annulé la suppression',
      'error'
    )
  }
    })
  }
}
