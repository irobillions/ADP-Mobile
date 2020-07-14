import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss'],
})
export class AddressModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
