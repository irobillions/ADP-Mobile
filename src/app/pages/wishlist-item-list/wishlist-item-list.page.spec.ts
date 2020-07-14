import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishlistItemListPage } from './wishlist-item-list.page';

describe('WishlistItemListPage', () => {
  let component: WishlistItemListPage;
  let fixture: ComponentFixture<WishlistItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistItemListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
