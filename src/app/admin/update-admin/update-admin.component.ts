import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../service-admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {MessageService} from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss'],
  providers: [MessageService]
})
export class UpdateAdminComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  id: any;
  services: any;
  constructor(
    public service: ServiceAdminService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router,
     private _snackBar: MatSnackBar,
     private messageService: MessageService,
 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe(data=>{
      console.log(data);
      this.services = data;

    })
  }

  onUpdate(){
 
         this.service.updateAdmin(this.id, this.services).subscribe((res)=> {
           
            // this.messageService.add({severity:'error', summary:'Error', detail:'Modification effectuer avec succes !!!'});
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Modification effectuée avec succes',
              showConfirmButton: false,
              timer: 1500
            })
      console.log(res);
      this.toast.success("Modification effectuer avec succes !!!");
      this.router.navigateByUrl('/listAdmin');
     
    })
  }

//  })

  // }
}
