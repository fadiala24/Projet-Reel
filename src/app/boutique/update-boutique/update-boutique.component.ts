import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from 'src/app/boutiquier/service-boutiquier.service';
import { LocaliteServiceService } from 'src/app/localite/localite-service.service';
import { ServiceBoutiqueService } from '../service-boutique.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-boutique',
  templateUrl: './update-boutique.component.html',
  styleUrls: ['./update-boutique.component.scss']
})
export class UpdateBoutiqueComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  boutiquier: any;
  boutic: any;
  id: any;
  services: any;

  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  vill: any;
  quart: any;
  constructor(
    public service: ServiceBoutiqueService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     public serve: ServiceBoutiquierService,
     private serves: LocaliteServiceService,
     private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutique(this.id).subscribe(data=>{
     // console.log(data);
      this.services = JSON.parse(data);
      console.log(JSON.parse(data));
      this.afficherBoutiquier()

      this.afficherVille1(true);
  console.log(this.vill);
    })
  }
  afficherVille1(etat:boolean){
    this.serves.listville(etat).subscribe(
      (data)=>{     
        this.vill = JSON.parse(data);
       
       
      }
    )
  }
  
  /**
   *  Affiche de la ville par son id
   */
  
  villes = [{id: 1}];
  VilleId = this.villes[1];
  onChangeObj(newObj:any) {
    console.log(newObj);
    this.afficherQuartier(newObj,true);
    this.VilleId = newObj;
  
  }
  
  
  
  
  afficherQuartier(parentId:any, etat:boolean){
    this.serves.quartierId(parentId,etat).subscribe(
      (data)=>{     
        this.quart = JSON.parse(data);
        console.log("quart************", this.quart);
        
      }
    )
  }
  afficherBoutiquier(){
    this.serve.getAllBoutiquier().subscribe(
      (data)=>{
        
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
  
  

  onUpdate(){
   

    this.service.updateBoutique(this.id, this.services).subscribe((res)=> {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Modification effectuée avec succes',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(res);
      this.router.navigateByUrl('/listBoutique');
    })
  
  }



}
