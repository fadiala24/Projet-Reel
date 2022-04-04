import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAdminService } from 'src/app/admin/service-admin.service';
import { ServiceBoutiqueService } from 'src/app/boutique/service-boutique.service';
import { ServiceBoutiquierService } from 'src/app/boutiquier/service-boutiquier.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { ServiceProduitService } from 'src/app/produit/service-produit.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  p: number = 1;
  searchText: any;
  admin: any;
  id:any;
  userId: any;
  listAdmin: any;
  adminConnect: any;
  listBoutique:any;
  listBoutiquier:any;
  listProduit:any;


  constructor(
    private service: ServiceAdminService,
    private serviceBoutique:ServiceBoutiqueService,
    private serviceBoutiquier: ServiceBoutiquierService,
    private serviceProduit: ServiceProduitService,
    private confirmationDialogService: ConfirmationDialogService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.listerBoutique();
    this.listerBoutiquier();
  this.listerProduit();
   this.listerAdmin();
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    console.log(this.adminConnect); 
  
  }


public openConfirmationDialog(id:any) {
  this.confirmationDialogService.confirm('Veuillez confirmer ..', 'Voulez-vous supprimer ... ?')
  .then((confirmed) => 

  this.service.deleteAdmin(id).subscribe((data: any)=>{
    console.log(data); 
    this.listerAdmin();
  }))
  .catch(
    () => 
    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}

listerAdmin(){
  this.service.getAllAdmin().subscribe((data)=>{
    
    return this.listAdmin=data;
   
  })
  
}

listerBoutique(){
  this.serviceBoutique.getAllBoutique().subscribe((data)=>{
    
    return this.listBoutique=data;
   
  })
  
}

listerBoutiquier(){
  this.serviceBoutiquier.getAllBoutiquier().subscribe((data)=>{
    
    return this.listBoutiquier=data;
   
  })
  
}
listerProduit(){
  this.serviceProduit.getAllProduit().subscribe((data)=>{
    
    return this.listProduit=data;
   
  })
  
}
restoreAdmin(id:any):void{
  if(confirm("Voulez-vous Restorer ??")){
    let userId = this.adminConnect.id;
 this.service.restoreAdmin(id, userId).subscribe((data: any)=>{
   console.log(data); 
   this.listerAdmin();
 });
 this.serviceBoutique.restoreBoutique(id, userId).subscribe((data: any)=>{
  console.log(data); 
  this.listerBoutique();
});
this.serviceBoutiquier.restoreBoutiquier(id, userId).subscribe((data: any)=>{
  console.log(data); 
  this.listerBoutiquier();
});
this.serviceProduit.restoreProduit(id, userId).subscribe((data: any)=>{
  console.log(data); 
  this.listerProduit();
});


} 
}
}
