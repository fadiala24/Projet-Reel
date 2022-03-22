import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from '../service-boutiquier.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-boutiquier',
  templateUrl: './add-boutiquier.component.html',
  styleUrls: ['./add-boutiquier.component.scss'],
  providers: [MessageService]
})
export class AddBoutiquierComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  showMsg: boolean = false;
  admin: any;
  adminConnect: any;
  services: any;
  constructor(
    private service: ServiceBoutiquierService,
    private router: Router,
    private toast: ToastrService,
    private messageService: MessageService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }


  AjoutService(form: NgForm) {
    if (form.valid) {
      this.services = {
        'nom': form.value['nom'], 'prenom': form.value['prenom'], 'password': form.value['password'], 'login': form.value['login'],
        'telephone': form.value['telephone'], 'etat': form.value['etat'], 'administrateur': this.adminConnect
      }
      console.log("ddddddddddj", this.services);

      this.service.validBoutiquier(this.services).subscribe(data => {
        console.log("data ************** ", (data));

         if (data==="login"){
          console.log("incorrect login");
          // this.messageService.add({severity:'error', summary:'Error', detail:'Login existe déja'});
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
        }else 
        if(data==="telephone"){
          console.log("incorrect telephone");
          this.messageService.add({severity:'error', summary:'Error', detail:'Telephone existe déja'});
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
        if(data==="password"){
          console.log("incorrect password");
          // this.messageService.add({severity:'error', summary:'Error', detail:'Password existe déja'});
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
            title: 'Mot de Passe existe déja '
          })
         }
        else{
        this.service.addBoutiquier(this.services).subscribe((data: any)=> {
            this.showMsg= true;
            console.log("helle ++++++++++++", data);
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Ajout effectuée avec succes',
            showConfirmButton: false,
            timer: 1500
          })

            this.router.navigateByUrl("/listBoutiquier");

          }
      })

    }
  }
}
