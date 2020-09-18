import { ViewerProductsService } from './../../viewer-products.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/viewer-products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public listProducts: Producto[] = [];
  public newProduct: FormGroup = null;

  constructor(private viewerProductsService: ViewerProductsService) { }

  ngOnInit(): void {
   // this.updateListProducts();
    this.newProduct = new FormGroup({
      
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.minLength(10)),
      starts: new FormControl(null, Validators.required),
      imgage: new FormControl(null), 
    })
  }

}

