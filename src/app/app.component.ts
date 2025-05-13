import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactivevalidation23';
  username:string|null|undefined='';
  userpassword:string|null|undefined='';
  useremail:string|null|undefined='';
  newprofile=new FormGroup(
    {
      name:new FormControl('',[Validators.required]), //validation aise lagta hai
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]) 
      // regex pattern ke liye ise hota hai
    }
  )
  submitthevalue(){
    console.log('Form is submitted');
    console.log(this.newprofile.value.name);
    console.log(this.newprofile.value.email);
    console.log(this.newprofile.value.password);
    this.username=this.newprofile.value.name;
    this.userpassword=this.newprofile.value.password;
    this.useremail=this.newprofile.value.email;

  }
  get name(){
    return this.newprofile.get('name');

  }
  get password(){
    return this.newprofile.get('password');
  }
  get email(){
    return this.newprofile.get('email');
  }
}
