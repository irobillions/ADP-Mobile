import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourSubscriptionsPage } from './your-subscriptions.page';

describe('YourSubscriptionsPage', () => {
  let component: YourSubscriptionsPage;
  let fixture: ComponentFixture<YourSubscriptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSubscriptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourSubscriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
