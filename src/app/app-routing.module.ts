import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth/authGuard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'tabs',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/user-account/user-account.module').then( m => m.UserAccountPageModule),
  },
  {
    path: 'modal-search-page',
    canActivate: [AuthGuard],
    loadChildren: () => import('./component/modal-search-page/modal-search-page.module').then( m => m.ModalSearchPagePageModule),
  },
  {
    path: 'wish-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/wish-list/wish-list.module').then( m => m.WishListPageModule),
  },
  {
    path: 'quote-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/quote-list/quote-list.module').then( m => m.QuoteListPageModule),
  },
  {
    path: 'your-subscriptions',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/your-subscriptions/your-subscriptions.module').then( m => m.YourSubscriptionsPageModule)
  },
  {
    path: 'ask-quote',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ask-quote/ask-quote.module').then( m => m.AskQuotePageModule)
  },
  {
    path: 'address-book',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'address-view/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/address-view/address-view.module').then( m => m.AddressViewPageModule)
  },
  {
    path: 'add-new-address',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/add-new-address/add-new-address.module').then( m => m.AddNewAddressPageModule)
  },
  {
    path: 'add-address',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'change-password',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-email',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-detail/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'order-filter',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/order-filter/order-filter.module').then( m => m.OrderFilterPageModule)
  },
  {
    path: 'do-request',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/do-request/do-request.module').then( m => m.DoRequestPageModule)
  },
  {
    path: 'product-list/:name',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'filter-product',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/filter-product/filter-product.module').then( m => m.FilterProductPageModule)
  },
  {
    path: 'product-details/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'comment-list/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/comment-list/comment-list.module').then( m => m.CommentListPageModule)
  },
  {
    path: 'seller-profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/seller-profile/seller-profile.module').then( m => m.SellerProfilePageModule)
  },
  {
    path: 'car-models-list',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/car-models-list/car-models-list.module').then( m => m.CarModelsListPageModule)
  },
  {
    path: 'cart-checkout-modal',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cart-checkout-modal/cart-checkout-modal.module').then( m => m.CartCheckoutModalPageModule)
  },
  {
    path: 'products-list-by-car',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/products-list-by-car/products-list-by-car.module').then( m => m.ProductsListByCarPageModule)
  },
  {
    path: 'parameters',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/parameters/parameters.module').then( m => m.ParametersPageModule)
  },
  {
    path: 'messages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'contact-expert',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/contact-expert/contact-expert.module').then( m => m.ContactExpertPageModule)
  },
  {
    path: 'checkout-process',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/checkout-process/checkout-process.module').then( m => m.CheckoutProcessPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'wishlist-item-list',
    loadChildren: () => import('./pages/wishlist-item-list/wishlist-item-list.module').then( m => m.WishlistItemListPageModule)
  },
  {
    path: 'quote-view',
    loadChildren: () => import('./pages/quote-view/quote-view.module').then( m => m.QuoteViewPageModule)
  },
  {
    path: 'promotions-and-deals',
    loadChildren: () => import('./pages/promotions-and-deals/promotions-and-deals.module').then( m => m.PromotionsAndDealsPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./pages/conversation/conversation.module').then( m => m.ConversationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
