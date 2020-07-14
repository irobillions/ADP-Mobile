import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartCheckoutModalPage } from './cart-checkout-modal.page';

describe('CartCheckoutModalPage', () => {
  let component: CartCheckoutModalPage;
  let fixture: ComponentFixture<CartCheckoutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCheckoutModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartCheckoutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
