import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import * as XLSX from 'xlsx';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import {MessageService} from 'primeng/api';
import swal from 'sweetalert2'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  providers: [MessageService]
})
@Injectable({
  providedIn: 'root',})
export class ListAdminComponent implements OnInit {
  p: number = 1;
  searchText: any;
  listeAdmins : any[]=[];
  loginData : any;
  test: string;
  detailId: any
  constructor(
    public service: ServiceAdminService,
    private confirmationDialogService: ConfirmationDialogService,
    private messageService: MessageService,
    
  ) { }

  ngOnInit(): void {
    this.getAllAdmin();
    
  }

  getAllAdmin(){
    this.listeAdmins=[];
    this.service.getAllAdmin().subscribe((data:any)=> {
      console.log(data);
      this.listeAdmins= data;
    })
    //  this.listeServices=this.service.getAllAdmin();
    console.log("hors boucle====",this.listeAdmins);
  }


  public openConfirmationDialog(id:any) {
    this.service.deleteAdmin(id).subscribe((data)=>{
      this.test =data;
      console.log(data); 
      this.getAllAdmin();
    })
  }

  onConfirm(id:any){
    swal.fire({
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
  
//   detail(id:any){
//     this.service.detailAdmin(id).subscribe(data=>{
//       console.log(data);
//       this.detailId =data;
    
      
  
//     Swal.fire({
//       title: 'Sweet!',
//       text: this.detailId.prenom,
//       imageUrl: 'https://unsplash.it/400/200',
//       imageWidth: 400,
//       imageHeight: 200,
//       imageAlt: 'Custom image',
//     })
//  })
//   } 
  
 }
