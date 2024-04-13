import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: IProduct = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
