import {Component, OnInit, ViewChild} from '@angular/core';
import {IonCheckbox} from '@ionic/angular';

@Component({
  selector: 'app-ask-quote',
  templateUrl: './ask-quote.page.html',
  styleUrls: ['./ask-quote.page.scss'],
})
export class AskQuotePage implements OnInit {
  @ViewChild('includingFile', {static: false}) checkBox: IonCheckbox;
  isIncludeFile = false;
  constructor() { }

  ngOnInit() {
  }

  async onIncludeFile() {
    this.isIncludeFile = true;
  }

  async onNotIncludeFile() {
    this.isIncludeFile = false;
  }

}
