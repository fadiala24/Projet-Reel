import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiquierService } from '../service-boutiquier.service';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-boutiquier',
  templateUrl: './update-boutiquier.component.html',
  styleUrls: ['./update-boutiquier.component.scss']
})
export class UpdateBoutiquierComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  id: any;
  services: any ={};
  constructor(
    public service: ServiceBoutiquierService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutiquier(this.id).subscribe((data)=>{
     // console.log(data);
      this.services = data;
      console.log(data);

    })
  }

  onUpdate(){
    this.service.updateBoutiquier(this.id, this.services).subscribe((res)=> {
  
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Modification effectuée avec succes',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/listBoutiquier');
    })
  }
  

}
