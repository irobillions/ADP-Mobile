import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressViewPage } from './address-view.page';

describe('AddressViewPage', () => {
  let component: AddressViewPage;
  let fixture: ComponentFixture<AddressViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
