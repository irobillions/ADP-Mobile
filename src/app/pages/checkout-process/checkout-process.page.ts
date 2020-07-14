import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController, PopoverController} from '@ionic/angular';
import {User} from '../../models/user.model';
import {Address} from '../../models/address.model';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/auth/user.service';
import {PopoverAddressMenuComponent} from '../../component/popover-address-menu/popover-address-menu.component';
import {AddressModalComponent} from '../../component/address-modal/address-modal.component';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.page.html',
  styleUrls: ['./checkout-process.page.scss'],
})
export class CheckoutProcessPage implements OnInit, OnDestroy {
  pageType = 1;
  user: User;
  address: Address[] = [];
  selectedAddressId;
  addressSubscription: Subscription;
  next = true;
  stepOne = true;
  stepTwo = true;
  constructor(private navController: NavController,
              private userService: UserService,
              private modalController: ModalController) { }

  ngOnInit() {
  }
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

  async createModal(ev, id) {
    const modal = await this.modalController.create({
      component: AddressModalComponent,
      animated: true
    });
    await modal.present();
  }

  getAddressChecked(event) {
    console.log(event.target.value);
    this.selectedAddressId = event.target.value;
  }

  IsTheCheckedAddress() {}

  back() {
    this.navController.back();
  }

  segmentChanged($event: CustomEvent) {
    console.log($event.detail.value);
    if ($event.detail.value === '3') {
      this.next = false;
    }
  }

  getCheckedDeliveryMode($event: CustomEvent) {

  }

  nextStep() {
    this.pageType = Number(this.pageType) + 1;
    if (this.pageType === 2) {
      this.stepOne = false;
    } else if (this.pageType === 3) {
      this.stepTwo = false;
    }
  }
  ngOnDestroy(): void {
    this.addressSubscription.unsubscribe();
  }

}
