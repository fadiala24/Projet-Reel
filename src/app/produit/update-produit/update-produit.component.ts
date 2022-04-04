import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiqueService } from 'src/app/boutique/service-boutique.service';
import { CategoryServiceService } from 'src/app/Category/category-service.service';
import Swal from 'sweetalert2';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {
  id: any;
  services: any ={};
  admin: any;
  adminConnect: any;
  prod:any;
  loginData:any;
  category : any;

  boutique:any;
  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    public service: ServiceProduitService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     public serves : CategoryServiceService,
     private serve: ServiceBoutiqueService,
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
     this.adminConnect = JSON.parse(this.admin)
     this.afficherBoutique();
     this.afficherCategory();
     
    this.id = this.route.snapshot.params['id'];
    this.service.detailProduit(this.id).subscribe(data=>{
      this.services = JSON.parse(data);
      console.log(JSON.parse(data));

    })
  }

  afficherBoutique(){
    this.serve.getAllBoutique().subscribe(
      (data)=>{
        
        this.boutique = data;
        console.log(this.boutique);
      }
    )
  }
    afficherCategory(){
      this.serves.getAllCategorie().subscribe(
        (data)=>{
          this.category = data;
          console.log(this.category);
          
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
    console.log(this.services);
    
    this.service.updateProduit(this.id, this.services).subscribe((res)=> {
      
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Modification effectuée avec succes',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(res);
      this.router.navigateByUrl('/listProduit');
    })
  }
  


}
