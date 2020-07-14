import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentListPage } from './comment-list.page';

describe('CommentListPage', () => {
  let component: CommentListPage;
  let fixture: ComponentFixture<CommentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
