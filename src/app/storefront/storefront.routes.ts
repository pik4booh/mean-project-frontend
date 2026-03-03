import { Routes } from '@angular/router';

import { StorefrontPageComponent } from './pages/storefront-page/storefront-page.component';
import { ManufacturePage } from './pages/manufacture-page/manufacture-page';
import { ProductDetailsPage } from './pages/product-detail-page/product-detail-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { OrderPage } from './pages/order-page/order-page';
import { HistoryPage } from './pages/history-page/history-page';
import { authGuard } from '../core/guards/auth.guard';
import { roleGuard } from '../core/guards/role.guard';

export const STOREFRONT_ROUTES: Routes = [
  {
    path: 'history',
    component: HistoryPage,
    title: 'Historique',
    canMatch: [authGuard, roleGuard],
    data:{ roles: ['BUYER'] }
  },
  {
    path: 'orders',
    component: OrderPage,
    title: 'Commandes',
    canMatch: [authGuard, roleGuard],
    data:{ roles: ['BUYER'] }
  },
  {
    path: 'checkout',
    component: CheckoutPage,
    title: 'Paiement',
    canMatch: [authGuard, roleGuard],
    data:{ roles: ['BUYER'] }
  },
  {
    path: 'cart',
    component: CartPage,
    title: 'Panier',
    canMatch: [authGuard, roleGuard],
    data:{ roles: ['BUYER'] }
  },
  { path: 'product/:id',
    component: ProductDetailsPage,
    title: 'Détails du produit',
    canMatch: [authGuard, roleGuard],
    data:{ roles: ['BUYER'] }
  },
  {
    path: 'manufacturers/:shopId',
    component: ManufacturePage,
    title: 'Profil de la boutique'
  },
  {
    path: 'manufacturers',
    component: ManufacturePage,
    title: 'Boutiques'
  },
  {
    path: '',
    component: StorefrontPageComponent,
    title: 'Boutique'
  }

];
