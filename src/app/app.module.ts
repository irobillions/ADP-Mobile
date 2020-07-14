import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalSearchPagePage} from './component/modal-search-page/modal-search-page.page';
import {ModalSearchPagePageModule} from './component/modal-search-page/modal-search-page.module';
import {IonicStorageModule} from '@ionic/storage';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth/auth.service';
import {StorageService} from './services/utils/storage.service';
import {AuthGuard} from './services/auth/authGuard.service';
import {AuthInterceptor} from './services/auth/httpInterceptor.service';
import {Storage} from '@ionic/storage';
import {  Geolocation} from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import {CategoryService} from './services/category/category.service';
import {CartCheckoutModalPageModule} from './pages/cart-checkout-modal/cart-checkout-modal.module';
import {CartCheckoutModalPage} from './pages/cart-checkout-modal/cart-checkout-modal.page';
import {NotificationsPage} from './pages/notifications/notifications.page';
import {NotificationsPageModule} from './pages/notifications/notifications.module';
import {CartService} from './services/cart/cart.service';
import {ProductService} from './services/product/product.service';
import {GlobalErrorHandlerService} from './services/utils/global-error-handler.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ModalSearchPagePage, NotificationsPage],
  // tslint:disable-next-line:max-line-length
    imports: [
        BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule,
      ModalSearchPagePageModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      NotificationsPageModule,
      CartCheckoutModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
      AuthService,
      AuthGuard,
      Geolocation,
      NativeGeocoder,
    CategoryService,
      CartService,
      ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
