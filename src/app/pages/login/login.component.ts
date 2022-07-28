import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin = 'artykovdaniyar@gmail.com';
  userPassword = 'lampa69';
  isVisible = false;
  form!: FormGroup;
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('artykovdaniyar@gmail.com'),
      password: new FormControl('lampa69'),
    });
  }

  onSubmit() {
    this.authService.loginIn(this.form.value);
  }
}
