import {Component, Input, OnInit} from '@angular/core';
import {NavController, NavParams, PopoverController} from '@ionic/angular';
import {UserService} from '../../services/auth/user.service';
import {Address} from '../../models/address.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-popover-address-menu',
  templateUrl: './popover-address-menu.component.html',
  styleUrls: ['./popover-address-menu.component.scss'],
})
export class PopoverAddressMenuComponent implements OnInit {
  @Input() addressId: number;
  address: Address;
    // tslint:disable-next-line:max-line-length
  constructor(private navParams: NavParams,
              private userService: UserService,
              private router: Router,
              private popoverController: PopoverController) {
    this.userService.getSingleAddress(this.navParams.get('addressId')).subscribe(
        res => {
            this.address = res;
            console.log(this.address, 'get single address function');
          },
              error => {
                console.log('error getting single address' + error);
              });
        }

  ngOnInit() {}

  async onDeleteAddress() {
      console.log(this.address, 'here popover deleted');
      await this.userService.removeAddress(this.address).subscribe();
      await this.userService.emitAddress();
      this.close().then(
        () => {
        console.log('popover closed');
    });
  }

  goEditPage() {
      console.log(this.address, 'here popover edit');
      this.router.navigate(['/address-view', this.address.id]).catch( err => {
          console.log(err);
      });
      this.close().then(
          () => {
              console.log('popover closed');
          });
  }

  async close() {
      await this.popoverController.dismiss();
  }
}
