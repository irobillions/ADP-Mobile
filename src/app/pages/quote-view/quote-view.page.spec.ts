import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuoteViewPage } from './quote-view.page';

describe('QuoteViewPage', () => {
  let component: QuoteViewPage;
  let fixture: ComponentFixture<QuoteViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
