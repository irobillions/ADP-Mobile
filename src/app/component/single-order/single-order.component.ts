import {Component, Input, OnInit} from '@angular/core';
import {OrderInterface} from '../../models/order.interface';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss'],
})
export class SingleOrderComponent implements OnInit {
  @Input() order: OrderInterface;

  constructor(private navController: NavController) { }

  ngOnInit() {}

  GoOrderDetails(id: number) {
    this.navController.navigateForward(`/order-detail/${id}`);
  }
}
