import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import ValidationError from '../../../shared/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    const firstName = this.registerForm.get('firstName').value;
    const lastName = this.registerForm.get('lastName').value;
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.authService.register(email, password, firstName, lastName).subscribe(
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
