import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/auth/user.service';
import {User} from '../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  public user: User;
  public selectedIndex: number;
  public otherDetails = [
    {
      title: 'Carnet d\'adresse',
      url: '/address-book',
      icon: 'map'
    },
    {
      title: 'Changer son mot de passe',
      url: '/change-password',
      icon: 'key'
    },
    {
      title: 'Changer son adresse email',
      url: '/change-email',
      icon: 'at'
    }
  ];
  accountDetailForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.user = this.userService.getAuthenticatedUser();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.accountDetailForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      codeArea: ['', [Validators.required, Validators.minLength(5)]],
      cellNumber: ['', [Validators.required]]
    });
  }

  onEdit() {}
}
