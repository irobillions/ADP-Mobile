import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactExpertPage } from './contact-expert.page';

describe('ContactExpertPage', () => {
  let component: ContactExpertPage;
  let fixture: ComponentFixture<ContactExpertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactExpertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactExpertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
