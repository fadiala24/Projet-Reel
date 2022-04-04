import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  id: any;
  services: any ={};
  photo: File | any;
  message: any;
  imagePath: any;
  imgURL: any;
  constructor(
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     public service: CategoryServiceService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailCategorie(this.id).subscribe(data=>{
     // console.log(data);
      this.services = JSON.parse(data);
      console.log(JSON.parse(data));
  })
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
    this.service.updateCategorie(this.id, this.services).subscribe((res)=> {
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Modification effectuée avec succes',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(res);
      this.router.navigateByUrl('/listCategorie');
    })
  }

}
