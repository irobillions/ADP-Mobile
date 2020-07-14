import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskQuotePage } from './ask-quote.page';

describe('AskQuotePage', () => {
  let component: AskQuotePage;
  let fixture: ComponentFixture<AskQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
