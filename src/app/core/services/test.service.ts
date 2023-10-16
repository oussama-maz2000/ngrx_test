import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from '../models/credential.model';
import { User } from '../models/user.model';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  sendUser(product: Product) {
    let params = new HttpParams()
      .set('id', product.id)
      .set('title', product.title)
      .set('category', product.category)
      .set('price', product.price)
      .set('description', product.description);

    return this.http.post('api/v1/auth/test2', params, {
      responseType: 'text',
    });
  }
}
