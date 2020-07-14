import { Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-modal-search-page',
  templateUrl: './modal-search-page.page.html',
  styleUrls: ['./modal-search-page.page.scss'],
})
export class ModalSearchPagePage implements OnInit {
  @ViewChild('autofocus', {static: false}) searchBar: IonSearchbar;

  constructor(private modalController: ModalController, private navController: NavController) { }

  ngOnInit() {
    this.focusSearch();
  }
  focusSearch(): void {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 500);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
