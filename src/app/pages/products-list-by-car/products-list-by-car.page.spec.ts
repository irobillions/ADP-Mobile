import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsListByCarPage } from './products-list-by-car.page';

describe('ProductsListByCarPage', () => {
  let component: ProductsListByCarPage;
  let fixture: ComponentFixture<ProductsListByCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListByCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListByCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
