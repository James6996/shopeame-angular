import { BuscadorPipe } from './../buscador.pipe';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path: '',
  component: ProductsComponent,
}];


@NgModule({
  declarations: [
    ProductsComponent,
    BuscadorPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
