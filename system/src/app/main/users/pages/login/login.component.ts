import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
    this.loginForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  onLogin(){
    const { username, password } = this.loginForm.value;
    if(this.userService.login(username,password)){
      this.router.navigate(['/user/detail']);
    }
    else {
      console.log('error');
    }
  }
}
