import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

 
  constructor(
   // private authService: AuthService,
    private router:Router,
    private ldingCntrl:LoadingController
    ) { }

  ngOnInit() {
  }


  onLogin(){
    this.isLoading=true
   // this.authService.login();
    this.ldingCntrl.create({keyboardClose:true,message:'Loggin In....'}).then(lgEL=>{
      lgEL.present();
      setTimeout(()=>{
        this.isLoading=false;
        lgEL.dismiss();
        this.router.navigateByUrl('/home');
      },1500);

    })
  }

  onSubmit(ngForm: NgForm){
    console.log(ngForm);
  }

  onSwitchAuth(){
    this.isLogin = !this.isLogin
  }
 

}