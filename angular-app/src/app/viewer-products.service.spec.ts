import { TestBed } from '@angular/core/testing';

import { ViewerProductsService } from './viewer-products.service';

describe('ViewerProductsService', () => {
  let service: ViewerProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
