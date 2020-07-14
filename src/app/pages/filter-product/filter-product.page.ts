import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.page.html',
  styleUrls: ['./filter-product.page.scss'],
})
export class FilterProductPage implements OnInit {

  KnobsValue: object = {lower: 0, upper: 1000 };

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {

  }
}
