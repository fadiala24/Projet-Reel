import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from 'src/app/boutiquier/service-boutiquier.service';
import { LocaliteServiceService } from 'src/app/localite/localite-service.service';
import { ServiceBoutiqueService } from '../service-boutique.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.scss'],
  providers: [MessageService]
})
export class AddBoutiqueComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  admin: any;
  adminConnect: any;
  services: any;
  boutiquier: any;
  boutic: any;
  loginData: any;

  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  vill: any;
  public quart: any;
  UVille: any;
  x: void;
  y: any;
  constructor(
    private service: ServiceBoutiqueService,
    private router: Router,
    private toast: ToastrService,
    private serve: ServiceBoutiquierService,
    private serves: LocaliteServiceService,
    private _snackBar: MatSnackBar,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {

    this.admin = localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    console.log(this.adminConnect);

    this.afficherVille1(true);
    console.log(this.vill);


    this.afficherBoutiquier();
    console.log(this.boutiquier);

  }

  afficherVille1(etat: boolean) {
    this.serves.listville(etat).subscribe(
      (data) => {
        this.vill = JSON.parse(data);


      }
    )
  }

  /**
   *  Affiche de la ville par son id
   */

  villes = [{ id: 1 }];
  VilleId = this.villes[1];
  
  onChangeObj(newObj: any) {
    console.log(newObj);
    this.afficherQuartier(newObj, true);
    this.VilleId = newObj;

  }




  afficherQuartier(parentId: any, etat: boolean) {
    this.serves.quartierId(parentId, etat).subscribe(
      (data) => {
        this.quart = JSON.parse(data);
        console.log("quart************", this.quart);

      }
    )
  }



  afficherBoutiquier() {
    this.serve.getAllBoutiquier().subscribe(
      (data) => {
        this.boutiquier = data;
        console.log(this.boutiquier);
      }
    )
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


  ajoutService(form: NgForm) {
    console.log("ggggg", form.value);

    if (form.valid) {
      let id: any = {};

      this.services = {
        'nom': form.value['nom'],
        'longitude': form.value['longitude'],
        'latitude': form.value['latitude'],
        'administrateur': this.adminConnect
      }
      console.log("okooooooooooooooooooooooooo", this.services);
      this.service.validBoutique(this.services).subscribe((data1: any) => {
        console.log("data : ", data1);

        if (data1 === "nom") {
          console.log("incorrect nom");
          // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'nom existe déja' });
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
            title: 'nom existe déja !!! '
          })
        } else
          if (data1 === "latitude") {
            console.log("incorrect latitude");
            // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'latitude existe déja' });
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
              title: 'latitude existe déja !!! '
            })
          }

          else
            if (data1 === "longitude") {
              console.log("incorrect longitude");
              // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'longitude existe déja' });
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
                title: 'Longitude existe déja !!! '
              })
            }
            else {

              this.service.addBoutique(this.services, this.photo[0]).subscribe((data: any) => {

                this.serve.detailBoutiquier(form.value['boutiquier']).subscribe((boutiquier: any) => {
                  console.log("---boutiquier---", boutiquier);


                  this.serves.detailLocalite(form.value['quartier']).subscribe((quarti: any) => {
                    console.log("---quartier---", JSON.parse(quarti));

                    this.serves.detailLocalite(form.value['ville']).subscribe((villle: any) => {
                      console.log("---ville---", JSON.parse(villle));


                      let bout = {
                        'nom': form.value['nom'],

                        'longitude': form.value['longitude'],
                        'latitude': form.value['latitude'],
                        'boutiquier': boutiquier,
                        'quartier': JSON.parse(quarti),
                        'ville': JSON.parse(villle),
                        'photo': this.photo[0].name
                      }
                      console.log("---BBBBBBBBB---", bout);

                      this.service.updateBoutique(data.id, bout).subscribe((dat: any) => {
                        console.log("helle ++++++++++++", dat);
                        
                      })
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Ajout effectuer avec succes',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      this.router.navigateByUrl("/listBoutique");

                    })
                  })

                })
              });



            }
      });
    }
   
  }


}