import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAllProducts } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<IAllProducts>{
    return this.http.get<IAllProducts>(this.API)
  }

}
