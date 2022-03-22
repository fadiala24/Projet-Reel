import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceloginService } from './servicelogin.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
 
  constructor(
    private messageService: MessageService,
     private service: ServiceloginService,
     private route: Router,
     private toastr: ToastrService,
     
     ) { }

  ngOnInit(): void {

  }




showViaService() {
    this.messageService.add({severity:'error', summary:'Error', detail:'Login ou Mot de Passe incorrect'});
}

  onLogin(loginForm: NgForm) {
    let userData = true
    this.service.login(loginForm.value['login'], loginForm.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           
           this.route.navigateByUrl('accueil');
          }else{
           
        this.showViaService();
          }
        }
      )
  }

}
