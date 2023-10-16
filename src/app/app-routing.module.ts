import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductAddComponent } from './features/product/product-add/product-add.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductSingleComponent } from './features/product/product-single/product-single.component';
import { ProductResolver } from './core/services/product.resolver';
import { TestComponent } from './core/test/test-component/test-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product/add',
    component: ProductAddComponent,
  },
  { path: 'product/edit', component: ProductEditComponent },
  { path: 'product/:id', component: ProductSingleComponent },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
