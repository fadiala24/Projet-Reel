import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import Swal from 'sweetalert2';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-list-boutique',
  templateUrl: './list-boutique.component.html',
  styleUrls: ['./list-boutique.component.scss']
})
export class ListBoutiqueComponent implements OnInit {
  p: number = 1;
  searchText: any;
  listeBoutiques : any[]=[];
  loginData : any;
  constructor(public service: ServiceBoutiqueService,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getAllBoutique();
  }

  getAllBoutique(){
    this.listeBoutiques=[];
    this.service.getAllBoutique().subscribe((data:any)=> {
      console.log(data);
      this.listeBoutiques= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeBoutiques);
  }

  deleteBoutique(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteBoutique(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllBoutique();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.service.deleteBoutique(id).subscribe((data)=>{
      console.log(data); 
      this.getAllBoutique();
    })
  }

  onConfirm(id:any){
    Swal.fire({
      title: 'Attention !!!',
        text: "Voulez-vous supprimer cet admin ?",
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
