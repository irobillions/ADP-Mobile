import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menuController: MenuController, private authService: AuthService, private router: Router) {
    if(this.authService.isAuthenticated() === true) {
      this.router.navigate(['/tabs', 'tabs', 'tab1']).then(() => {
        console.log('always authenticated');
      });
    }
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if(this.authService.isAuthenticated() === true) {
      this.router.navigate(['/tabs', 'tabs', 'tab1']).then(() => {
        console.log('always authenticated');
      });
    }
  }

}
