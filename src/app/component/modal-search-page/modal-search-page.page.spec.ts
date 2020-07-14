import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSearchPagePage } from './modal-search-page.page';

describe('ModalSearchPagePage', () => {
  let component: ModalSearchPagePage;
  let fixture: ComponentFixture<ModalSearchPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSearchPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSearchPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
