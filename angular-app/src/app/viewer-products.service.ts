import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewerProductsService {
  public listProducts: Producto[] = [];
  public year:number = 0;


  public productsUrl: string =
    'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';

  constructor(private httpClient: HttpClient) {}
  getProduct(): Observable<Producto[]> {
    const Product: Observable<Producto[]> = this.httpClient.get(
      this.productsUrl
    ) as Observable<Producto[]>;
    return Product;
  }
  public getYear(): number {
    return this.year = new Date().getFullYear();
  }
  

}
export interface Producto {
  id:number;
  name: string;
  price: number;
  description: string;
  starts: number;
  imgage: string;
}
