import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderFilterPage } from './order-filter.page';

describe('OrderFilterPage', () => {
  let component: OrderFilterPage;
  let fixture: ComponentFixture<OrderFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
