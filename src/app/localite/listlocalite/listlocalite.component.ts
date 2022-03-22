import { Component, Injectable, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import Swal from 'sweetalert2';
import { LocaliteServiceService } from '../localite-service.service';

@Component({
  selector: 'app-listlocalite',
  templateUrl: './listlocalite.component.html',
  styleUrls: ['./listlocalite.component.scss']
})
@Injectable({
  providedIn: 'root',})
export class ListlocaliteComponent implements OnInit {
  p: number = 1;
  searchText: any;
  listeAdmins : any[]=[];
  loginData : any;
  constructor(
    public service: LocaliteServiceService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.getAllLocalite();
  }

  getAllLocalite(){
    this.listeAdmins=[];
    this.service.getAllLocalite().subscribe((data:any)=> {
      console.log(data);
      this.listeAdmins= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeAdmins);
  }

  deleteLocalite(id:any):void{
    if(confirm("Voulez-vous supprimer ??")){

      console.log("helooooooo" + id);
     
      this.service.deleteLocalite(id).subscribe((data)=>{
      console.log("helooooooo"); 
      this.getAllLocalite();
    });
  }
   
  }
  public openConfirmationDialog(id:any) {
    this.service.deleteLocalite(id).subscribe((data)=>{
      console.log(data); 
      this.getAllLocalite();
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
