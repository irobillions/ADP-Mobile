import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import ValidationError from '../../../shared/validation';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  message = '';
  messageError: ValidationError = new ValidationError();
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    if (this.authService.isAuthenticated() === true) {
      this.router.navigate(['/tabs', 'tabs', 'tab1']);
    }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    const email = this.loginForm.get('email').value;
    console.log(email);
    const password = this.loginForm.get('password').value;
    console.log(`logging in: ${email}`);
    this.authService.login(email, password).subscribe(
        () => {
          this.router.navigate(['/tabs', 'tabs', 'tab1']);
        },
        error => {
          if (error instanceof ValidationError) {
            this.messageError = error;
          } else {
            this.message = error;
          }
        }
    );
  }
}
