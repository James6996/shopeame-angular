import { ViewerProductsService, Producto } from './../../viewer-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public listProducts: Producto[] = [];
  public searchProduct: string = '';

  constructor(private viewerProductsService: ViewerProductsService) { 
    this.viewerProductsService.getProduct().subscribe((data: Producto[])=>{
      this.listProducts = data;
    });
    this.searchProduct = '';
    

  }
  

  ngOnInit(): void {
    
  }
  

}
