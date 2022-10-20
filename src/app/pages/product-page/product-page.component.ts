import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'ng-test';
  products: Product[] = [];
  loading = false;
  term = '';

  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
