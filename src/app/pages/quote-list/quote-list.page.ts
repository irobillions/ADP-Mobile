import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {QuoteModalFormComponent} from '../../component/quote-modal-form/quote-modal-form.component';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.page.html',
  styleUrls: ['./quote-list.page.scss'],
})
export class QuoteListPage implements OnInit {

  constructor(private navController: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  goOnQuoteView() {
    this.navController.navigateForward('/quote-view');
  }

  async createNewQuote() {
    const modal = await this.modalController.create({
      component: QuoteModalFormComponent,
      animated: true
    });
    await modal.present();
  }
}
