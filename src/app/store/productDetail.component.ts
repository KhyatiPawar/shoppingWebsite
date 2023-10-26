import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'productDetail',
  templateUrl: 'productDetail.component.html'
})

export class productDetailComponent  {
  productDetails: Product | undefined;

  constructor(private route: ActivatedRoute,  private repository: ProductRepository,private router: Router) {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      this.productDetails = this.repository.getProduct(productId);
    });
  }
  backButton()
  {

    this.router.navigateByUrl("/store");

  }

}
