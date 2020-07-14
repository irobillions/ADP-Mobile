import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../services/auth/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  public selectedIndex: number;
  public selectedIndexPS: number;
  public selectedIndexOth: number;
  public selectedDec: boolean = false;
  user: User;
  public appPages = [
    {
      title: 'Vos commandes',
      url: '/orders',
      icon: 'archive'
    },
    {
      title: 'Votre liste de souhait',
      url: '/wish-list',
      icon: 'heart'
    },
    {
      title: 'Votre compte',
      url: '/user-account',
      icon: 'person'
    },
    {
      title: 'Vos devis',
      url: '/quote-list',
      icon: 'clipboard'
    },
    {
      title: 'Vos abonnements',
      url: '/your-subscriptions',
      icon: 'list'
    },
    {
      title: 'messagerie',
      url: '/messages',
      icon: 'mail'
    }
  ];
  public labels = [
      {
        title: 'Demander un devis',
      url: '/ask-quote',
      icon: 'receipt'
      },
    {
      title: 'Promotions et ventes flash',
      url: '',
      icon: 'wallet'
    },
    {
      title: 'Soumettre une demande ',
      url: '/do-request',
      icon: 'document-attach'
    },
    {
      title: 'Contacter un expert',
      url: '/contact-expert',
      icon: 'call'
    }
    ];
  public others = [
      {
        title: 'paramètres',
        url: '/parameters',
        icon: 'settings'
      }
  ];

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getAuthenticatedUser();
  }

  onLogout() {
    this.selectedDec = true;
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
