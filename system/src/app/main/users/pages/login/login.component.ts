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

  loginError: string = '';
  
  onLogin(){

    if (this.loginForm.invalid) {
      this.loginError = 'Please enter valid credentials.';
      return;
    }

    this.userService.userLogin(this.loginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/user/dashboard']); // Redirect
          this.loginError = ''; // Clear error if login is successful
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.loginError = 'Invalid username or password.'; // Show error for wrong credentials
        }  else if (err.status === 404) {
          this.loginError = 'User not found';
        }
        else {
          this.loginError = 'Something went wrong. Please try again.';
        }
      }
    });
    // const { username, password } = this.loginForm.value;
    // if(this.userService.login(username,password)){
    //   this.router.navigate(['/user/detail']);
    // }
    // else {
    //   console.log('error');
    // }
  }
}
