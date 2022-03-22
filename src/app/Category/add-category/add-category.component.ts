import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryServiceService } from '../category-service.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [MessageService]
})
export class AddCategoryComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
 
  loginData:any;


  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    private service: CategoryServiceService,
    private router: Router,
    private toast: ToastrService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }
  view(files: any) { 
    this.photo = files;
    console.log(files[0].name);
  
    if (files.length === 0)
      return;
  
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
 
  
  AjoutService(form: NgForm) {   
    let id : any = {};
    
    if(form.valid){
      this.services = {'nom': form.value['nom']    
                      }
                        console.log(this.services)
                  this.service.validCategory(this.services).subscribe((data1: any) => {
                          console.log("data : ", data1);
                  
                          if (data1 === "nom") {
                            console.log("incorrect nom");
                         //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'nom existe déja' });
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
                          title: 'Nom existe déja '
                        })
                          } else{
                            
                this.service.addCategorie(this.services, this.photo[0]).subscribe((data: any)=> { 
          let bout = {'nom': form.value['nom'],'photo': this.photo[0].name,
                       
                        }
                        console.log("---BBBBBBBBB---",bout);      
             this.service.updateCategorie(data.id, bout).subscribe((dat: any)=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Ajout effectuer avec succes',
                showConfirmButton: false,
                timer: 1500
              })
                      this.router.navigate(["listCategorie"]);
                      console.log("helle ++++++++++++", data);
                     });
      })
    }
  })                
      
    }
  }

}