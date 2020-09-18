import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => {
    return import('./home/home.module').then(m => m.HomeModule);
  }
}, {
  path: 'products',
  loadChildren: () => {
    return import('./products/products.module').then(m => m.ProductsModule);
  }
}, {
  path: 'settings',
  loadChildren: () => {
    return import('./settings/settings.module').then(m => m.SettingsModule);
  }
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
