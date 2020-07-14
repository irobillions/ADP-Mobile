import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromotionsAndDealsPage } from './promotions-and-deals.page';

describe('PromotionsAndDealsPage', () => {
  let component: PromotionsAndDealsPage;
  let fixture: ComponentFixture<PromotionsAndDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsAndDealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionsAndDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
