import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((listar) => {
      this.products = listar.products;
      })
  }

}
