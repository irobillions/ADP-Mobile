import {Component, ViewChild} from '@angular/core';
import {IonSlides, NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('slideWithNav2', {static: false}) slideWithNav2: IonSlides;
  sliderTwo: any;
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 3,
    loop: true,
  };
  slidesItems = [
    {
      url: '../assets/images/bmw-logo.png',
      designation: 'BMW'
    },
    {
      url: '../assets/images/logo-toyota.jpg',
      designation: 'TOYOTA'
    },
    {
      url: '../assets/images/Seat-logo.png',
      designation: 'SEAT'
    },
    {
      url: '../assets/images/peugeot-logo.png',
      designation: 'PEUGEOT'
    },
    {
      url: '../assets/images/renault-logo.png',
      designation: 'RENAULT'
    }
  ];
  constructor(private navController: NavController) {
     this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
    };

  }

  // Move to Next slide
  async slideNext(object, slideView) {
    slideView.slideNext(500, false).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Move to previous slide
  async slidePrev(object, slideView) {
    slideView.slidePrev(500, false).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  // Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  // Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkIsBeginning(object, slideView);
    this.checkIsEnd(object, slideView);
  }

  checkIsBeginning(object, slideView) {
    slideView.isBeginning().then((isTrue) => {
      object.isBeginningSlide = isTrue;
    });
  }

  checkIsEnd(object, slideView) {
    slideView.isEnd().then((isTrue) => {
      object.isEndSlide = isTrue;
    });
  }

  goToCarModelList() {
    this.navController.navigateForward('/car-models-list');
  }
}
