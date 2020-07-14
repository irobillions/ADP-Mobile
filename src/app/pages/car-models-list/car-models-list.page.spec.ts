import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarModelsListPage } from './car-models-list.page';

describe('CarModelsListPage', () => {
  let component: CarModelsListPage;
  let fixture: ComponentFixture<CarModelsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarModelsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
