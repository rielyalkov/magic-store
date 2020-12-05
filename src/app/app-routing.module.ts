import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {StoreComponent} from './store/store.component';
import {LoginComponent} from './login/login.component';
import {CatalogComponent} from './store/catalog/catalog.component';
import {CartComponent} from './store/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppRoutingModule { }
