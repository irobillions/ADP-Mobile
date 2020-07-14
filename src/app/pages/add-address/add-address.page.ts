import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProvidersService} from '../../services/utils/providers.service';
import {UserService} from '../../services/auth/user.service';
import {Address} from '../../models/address.model';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  adrObj: any;
  addAddressForm: FormGroup;
  user: User;
  constructor(private toastController: ToastController,
              private formBuilder: FormBuilder,
              private providersService: ProvidersService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getAuthenticatedUser();
    this.initForm();
  }

  ionViewWillEnter() {
    this.adrObj = this.providersService.obj;
    console.log(this.adrObj);
    this.providersService.clear();
  }

  async presentToast(msg, dur, clr) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      color: clr
    });
    await toast.present();
  }

  initForm() {
    this.addAddressForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      codeArea: ['', [Validators.required]],
      cellNumber: ['', [Validators.required]],
      lat: '',
      long: '',
      adr: ''
    });
  }

  onAddAddress() {
    const form = this.addAddressForm.value;
    const adr = new Address(form.firstName, form.lastName, form.city, form.country, form.zipCode, form.street);
    adr.cellNumber = '+' + form.codeArea + form.cellNumber;
    adr.userId = this.user.id;
    if (this.adrObj !== null && this.adrObj !== undefined) {
      adr.mapEl = this.adrObj;
    }
    console.log(adr);
    this.userService.createNewAddress(adr);
    this.userService.emitAddress();
  }
}
