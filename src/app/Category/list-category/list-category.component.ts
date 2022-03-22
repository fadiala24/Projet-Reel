import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import Swal from 'sweetalert2';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  p: number = 1;
  searchText: any;
  listeProduit : any[]=[];
  loginData : any;
  constructor(public service: CategoryServiceService,
    private confirmationDialogService: ConfirmationDialogService) { }
  ngOnInit(): void {
    this.getAllCategorie();
  }

  getAllCategorie(){
      this.listeProduit=[];
      this.service.getAllCategorie().subscribe((data:any)=> {
        console.log(data);
        this.listeProduit= data;
      })
      //  this.listeServices=this.service.getAllAdmin();
      console.log("hors boucle====",this.listeProduit);
    }
  
    deleteCategorie(id:any):void{
      if(confirm("Voulez-vous supprimer ??")){
  
        console.log("helooooooo" + id);
       
        this.service.deleteCategorie(id).subscribe((data)=>{
        console.log("helooooooo"); 
        this.getAllCategorie();
      });
    }
     
    }
    public openConfirmationDialog(id:any) {
      this.service.deleteCategorie(id).subscribe((data)=>{
        console.log(data); 
        this.getAllCategorie();
      })
    }
  
    onConfirm(id:any){
      Swal.fire({
        title: 'Attention !!!',
          text: "Voulez-vous supprimer cette categorie ?",
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
