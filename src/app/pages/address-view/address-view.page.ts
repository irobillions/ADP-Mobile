import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../../models/address.model';
import {UserService} from '../../services/auth/user.service';
import {User} from '../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.page.html',
  styleUrls: ['./address-view.page.scss'],
})
export class AddressViewPage implements OnInit {
  addressId: number;
  user: User;
  addressForm: FormGroup;
  address: Address;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private toastController: ToastController,
              private navController: NavController) {
      this.addressId = this.route.snapshot.params.id;
      this.user = this.userService.getAuthenticatedUser();
      console.log(this.user);
      this.getSelectAddress(this.addressId, this.user);
  }

  ngOnInit() {
      this.initForm();
  }

    async presentToast(msg, dur, clr) {
        const toast = await this.toastController.create({
            message: msg,
            duration: dur,
            color: clr
        });
        await toast.present();
    }

  getSelectAddress(id: number, user: User) {
      this.userService.getSingleAddress(id).subscribe(
          res => {
              this.address = res;
              this.address.firstName = user.firstName;
              this.address.lastName = user.lastName;
              this.address.cellNumber = user.cellNumber;
              console.log(this.address, 'here address-view go edit');
          }, error => {
              console.log('error get address' + error);
              this.presentToast('an error occurs when retrieve address! Sorry retry later!', 2000, 'danger');
          }
      );
  }

  initForm() {
      this.addressForm = this.formBuilder.group({
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          street: ['', [Validators.required]],
          city: ['', [Validators.required]],
          country: ['', [Validators.required]],
          zipCode: ['', [Validators.required]],
          codeArea: ['', [Validators.required]],
          cellNumber: ['', [Validators.required]]
      });
  }

  onEditAddress() {
      const form = this.addressForm.value;
      const newAdr = new Address(form.firstName, form.lastName, form.city, form.country, form.zipCode, form.street);
      newAdr.cellNumber = '+' + form.codeArea + form.cellNumber;
      newAdr.userId = this.user.id;
      this.userService.EditAddress(this.addressId, newAdr).subscribe(
          () => {
              this.presentToast('addresse edited well', 2000, 'success');
              this.navController.navigateBack('/address-book');
          }, (err) => {
              console.log(err);
              this.presentToast('addresse edited failed error with server', 2000, 'success');
          }
      );
  }
}
