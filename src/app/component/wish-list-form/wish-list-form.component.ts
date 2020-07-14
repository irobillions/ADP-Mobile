import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-wish-list-form',
  templateUrl: './wish-list-form.component.html',
  styleUrls: ['./wish-list-form.component.scss'],
})
export class WishListFormComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
