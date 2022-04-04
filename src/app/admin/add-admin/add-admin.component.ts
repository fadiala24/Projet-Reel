import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import { ToastrService } from 'ngx-toastr';
import {MessageService} from 'primeng/api';
import Swal from 'sweetalert2';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
  providers: [MessageService]
})
export class AddAdminComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  admin: any;
  adminConnect: any;
  services: any;
  test1: any;

  constructor(
    private service: ServiceAdminService,
    private router: Router,
    private toast: ToastrService,
    private messageService: MessageService,
    private _snackBar: MatSnackBar
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
}


AjoutService(form: NgForm) {
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'prenom': form.value['prenom'], 'email': form.value['email'],
    'telephone': form.value['telephone'],'login': form.value['login'], 'password': form.value['password'], 'etat': form.value['etat'],   'administrateur': this.adminConnect}
     console.log("Service : ", this.services)
    // console.log("Form : ", form.value);
    this.service.validateAdmin(this.services).subscribe((data: any)=> { 
       
      console.log("data : ", data);
       if (data==="email"){
        console.log("incorrect email");
     //   this.messageService.add({severity:'error', summary:'Error', detail:'email existe déja'});
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
          icon: 'error',
          title: 'Email existe déja '
        })

      }else 
      if(data==="telephone"){
        console.log("incorrect telephone");
   //     this.messageService.add({severity:'error', summary:'Error', detail:'Telephone existe déja'});
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
    icon: 'error',
    title: 'Telephone existe déja '
  })

      }
      
      else 
      if(data==="login"){
        console.log("incorrect login");
      //  this.messageService.add({severity:'error', summary:'Error', detail:'Login existe déja'});
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
        icon: 'error',
        title: 'Login existe déja '
      })

      }else{
        this.service.addAdmin(this.services).subscribe(data1=>{
            console.log("data1 +++++++++++++",data1);
            
        })
        // this.messageService.add({severity:'success', summary:'Error', detail:'Ajout effectué avec succes'});
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ajout effectuer avec succes',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/listAdmin");
        console.log("helle ++++++++++++", data);

      }
     
    })
  }
}
}
