import {Component, OnInit, ViewChild} from '@angular/core';
import {IonCheckbox, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-quote-modal-form',
  templateUrl: './quote-modal-form.component.html',
  styleUrls: ['./quote-modal-form.component.scss'],
})
export class QuoteModalFormComponent implements OnInit {
  @ViewChild('includingFile', {static: false}) checkBox: IonCheckbox;
  isIncludeFile = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async onIncludeFile() {
    this.isIncludeFile = true;
  }

  async onNotIncludeFile() {
    this.isIncludeFile = false;
  }

}
