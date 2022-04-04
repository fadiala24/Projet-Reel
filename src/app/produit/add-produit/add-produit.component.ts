import { AbstractType, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiqueService } from 'src/app/boutique/service-boutique.service';
import { CategoryServiceService } from 'src/app/Category/category-service.service';
import Swal from 'sweetalert2';
import { ServiceProduitService } from '../service-produit.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss'],
  providers: [MessageService]
})
export class AddProduitComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  prod: any;
  loginData: any;

  categories: any;
  boutiques: any;
  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  boutiqId: any;
  cateId: any;
  constructor(
    private service: ServiceProduitService,
    private router: Router,
    private toast: ToastrService,
    private serve: ServiceBoutiqueService,
    private serves: CategoryServiceService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    this.afficherBoutique();
    this.afficherCategorie();
    //console.log(JSON.parse(this.boutique));
  }

  afficherBoutique() {
    this.serve.getAllBoutique().subscribe(
      (data) => {

        this.boutiques = data;
        console.log(this.boutiques);
      }
    )
  }
  afficherCategorie() {
    this.serves.getAllCategorie().subscribe(
      (data) => {

        this.categories = data;
        console.log(this.categories);
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
  AjoutService(form: NgForm) {
    let id: any = {};

    if (form.valid) {
      this.services = {
        'nom': form.value['nom'], 'quantite': form.value['quantite'],
        'prix_unitaire': form.value['prix_unitaire'],
        'prix_achat': form.value['prix_achat'],
        'unite': form.value['unite'],
      }
      console.log(this.services)
      this.service.validProduit(this.services).subscribe((data1: any) => {
        console.log("data : ", data1);

        if (data1 === "nom") {
          console.log("incorrect nom");
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
        } 
            else {

              this.service.addProduit(this.services, this.photo[0]).subscribe((data: any) => {

                this.serve.detailBoutique(form.value['boutique']).subscribe((bou: any) => {
                  this.boutiqId = bou;

                  this.serves.detailCategorie(form.value['category']).subscribe((cat: any) => {
                    this.cateId = cat
                    let bout = {
                      'nom': form.value['nom'],
                      'quantite': form.value['quantite'],
                      'prix_unitaire': form.value['prix_unitaire'],
                      'prix_achat': form.value['prix_achat'],
                      'unite': form.value['unite'],
                      'photo': this.photo[0].name,
                      'category': JSON.parse(this.cateId),
                      'boutiques': JSON.parse(this.boutiqId),
                    }
                    console.log("---BBBBBBBBB---", bout);
                    this.service.updateProduit(data.id, bout).subscribe((dat: any) => {
                      console.log(dat);
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Ajout effectué avec succes',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      this.router.navigate(["listProduit"]);

                      console.log("helle ++++++++++++", data);
                    })
                  });
                });



              })
            }
      });
    }
  }

}
