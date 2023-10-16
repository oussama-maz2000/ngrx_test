import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Product } from '../models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Product', serviceElementFactory);
  }
}
