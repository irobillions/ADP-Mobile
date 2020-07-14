import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/auth/user.service';
import {User} from '../../models/user.model';
import {Address} from '../../models/address.model';
import {Subscription} from 'rxjs';
import {PopoverController} from '@ionic/angular';
import {PopoverAddressMenuComponent} from '../../component/popover-address-menu/popover-address-menu.component';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.page.html',
  styleUrls: ['./address-book.page.scss'],
})
export class AddressBookPage implements OnInit, OnDestroy {
  user: User;
  address: Address[] = [];
  selectedAddressId;
  addressSubscription: Subscription;
  constructor(private userService: UserService, private popoverController: PopoverController) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.addressSubscription = this.userService.AddressSubject.subscribe(
        (addressList: Address[]) => {
          console.log(addressList);
          this.address = addressList;
        }
    );
    this.userService.emitAddress();
    this.user = this.userService.getAuthenticatedUser();
  }

  async createPopOver(ev, id) {
    const popover = await this.popoverController.create({
      component: PopoverAddressMenuComponent,
      backdropDismiss: true,
      translucent: true,
      event: ev,
      componentProps: {
        addressId: id
      }
    });
    return await popover.present();
  }
  getAddressChecked(event) {
    console.log(event.target.value);
    this.selectedAddressId = event.target.value;
  }

  IsTheCheckedAddress() {}

  ngOnDestroy(): void {
    this.addressSubscription.unsubscribe();
  }
}
