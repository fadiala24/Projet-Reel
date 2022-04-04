import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocaliteServiceService } from '../localite-service.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addlocalite',
  templateUrl: './addlocalite.component.html',
  styleUrls: ['./addlocalite.component.scss'],
  providers: [MessageService]
})
export class AddlocaliteComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  loc: any;
  Type: any;
  parent: any;

  constructor(
    private service: LocaliteServiceService,
    private router: Router,
    private toast: ToastrService,
    private messageService: MessageService,
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin);
  this.afficherVille1(true);
  console.log(this.loc);
}
afficherVille1(etat:boolean){
  this.service.listville(etat).subscribe(
    (data)=>{     
      this.loc = JSON.parse(data);
     
     
    }
  )
}



AjoutService(form: NgForm) {  
  
  
  if(form.valid){
    console.log(form.value.type);
    
    if(form.value.type=="Quartier"){
    
    this.service.detailLocalite(form.value['parent']).subscribe((villle:any)=>{
      console.log("---ville---",JSON.parse(villle));
      this.parent = villle;
      console.log('hhhhhhhhh', JSON.parse(this.parent));
    
      this.services = {'libelle': form.value['libelle'],
                       'type': form.value['type'],
                       'parent':JSON.parse(this.parent),
                      'etat': form.value['etat'],
                      'administrateur': this.adminConnect}
       console.log(this.services)
       this.service.validLocalite(this.services).subscribe((data1: any) => {
        console.log("data : ", data1);

        if (data1 === "libelle") {
          console.log("incorrect libelle");
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'libelle existe déja' });

        } else{
          this.service.addLocalite(this.services).subscribe((data: any)=> {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Ajout effectuer avec succes',
              showConfirmButton: false,
              timer: 1500
            })
          this.router.navigateByUrl("/listLocalite");
          console.log("helle ++++++++++++", data);
      })}
      
        
      })
    })
    }
    
    else{
      console.log(form.value);
      this.service.validLocalite(form.value).subscribe((data1: any) => {
        console.log("data : ", data1);

        if (data1 === "libelle") {
          console.log("incorrect libelle");
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'libelle existe déja' });

        } else{
          
          this.service.addLocalite(form.value).subscribe((data: any)=> {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Ajout effectuer avec succes',
              showConfirmButton: false,
              timer: 1500
            })
        this.router.navigateByUrl("/listLocalite");
        console.log("okkk ++++++++++++", data);
      
      
    })
   }
  })
   
    
  }
   

   
  
  }
}
    }
