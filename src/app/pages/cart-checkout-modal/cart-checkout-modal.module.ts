import { NgModule, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthService } from "../auth/auth.service";

import { IonicModule } from "@ionic/angular";

import { CartCheckoutModalPageRoutingModule } from "./cart-checkout-modal-routing.module";

import { CartCheckoutModalPage } from "./cart-checkout-modal.page";

declare var StripeCheckout: StripeCheckoutStatic;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutModalPageRoutingModule,
  ],
  declarations: [CartCheckoutModalPage],
})
export class CartCheckoutModalPageModule {
  @Input() amount;
  @Input() description;
  handler: StripeCheckoutHandler;
  loading: boolean;
  confirmation: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: "pk_test_your_key",
      image: "/your-avatar.png",
      locale: "auto",
      source: async (source) => {
        this.loading = true;
        const user = await this.auth.getUser();
        const fun = this.functions.httpsCallable("stripeCreateCharge");
        this.confirmation = await fun({
          source: source.id,
          uid: user.uid,
          amount: this.amount,
        }).toPromise();
        this.loading = false;
      },
    });
  }

  async checkout(e) {
    const user = await this.auth.getUser();
    this.handler.open({
      name: "Fireship Store",
      description: this.description,
      amount: this.amount,
      email: user.email,
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener("window:popstate")
  onPopstate() {
    this.handler.close();
  }
}
