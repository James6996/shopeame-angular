import { ViewerProductsService } from './../../viewer-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public updateYear:number = 0;

  constructor(private viewerService:ViewerProductsService) { 
    this.updateYear =  this.viewerService.getYear();
  }

  ngOnInit(): void {
  }

}
