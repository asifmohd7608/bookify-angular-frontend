import { Component } from '@angular/core';
import { UntypedFormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

constructor(public ufb:UntypedFormBuilder,private auth:AuthService,public router:Router){}

signupForm=this.ufb.group({
Email:['',[Validators.required,Validators.email]],
First_Name:['',[Validators.required,Validators.minLength(2)]],
Last_Name:['',[Validators.required,Validators.minLength(2)]],
Address:['',[Validators.required,Validators.minLength(2)]],
City:['',[Validators.required,Validators.minLength(2)]],
Mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
});

errorMsg:string=''
onSubmit(){
  let currentUrl:string=this.router.url;
  this.signupForm.markAllAsTouched();
  this.signupForm.valid && this.auth.userSignUp(this.signupForm.value,currentUrl).subscribe(res=>{
    console.log(res)
    if(res.success){
      localStorage.setItem('Token',res.user.Token);
      res.user.Role==='admin' ? this.router.navigate(['/admin']) : this.router.navigate(['/user'])
    }else{
    this.errorMsg=res.errorMessage
    }
  },err=>{
    console.log(err)
  })
}

}
