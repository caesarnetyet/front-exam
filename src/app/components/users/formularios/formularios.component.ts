import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
  )

  constructor(
    private fb: FormBuilder,
    private UserService: UsersService,
    private router: Router) {}

  onSubmit() {
    if (this.registerForm.invalid) return console.log('formulario invalido', this.registerForm.invalid)
    this.UserService.register(this.registerForm.value as User).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  onLogin(){
    if (this.loginForm.invalid) return console.log('formulario invalido', this.loginForm.invalid)
    this.UserService.login(this.loginForm.value as User).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/menu']);
      }
    )
  }
}
