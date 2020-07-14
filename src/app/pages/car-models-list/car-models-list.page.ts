import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-models-list',
  templateUrl: './car-models-list.page.html',
  styleUrls: ['./car-models-list.page.scss'],
})
export class CarModelsListPage implements OnInit {
  carModels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor() { }

  ngOnInit() {
  }

}
