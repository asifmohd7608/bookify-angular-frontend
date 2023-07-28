import { Component } from '@angular/core';
import { UntypedFormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(public ufb:UntypedFormBuilder,private auth:AuthService,public router:Router){}
  errorMsg:string='';
  loginForm=this.ufb.group({
    username:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
  });

    onSubmit(){
      this.loginForm.controls['username'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
      this.auth.userLogin(this.loginForm.value).subscribe(res=>{
        if(res.success){
          localStorage.setItem('Token',res.user.Token)
          if(res.user.Role==='admin'){
            localStorage.setItem('Role','admin');
            this.router.navigate(['/admin']);
          }else{
            localStorage.setItem('Role','user');
            this.router.navigate(['/home'])
          }
        }else{
          this.errorMsg=res.errMessage
        }
      },err=>{
        console.log(err)
      });
    }
} 
