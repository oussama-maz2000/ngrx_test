import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductEditComponent } from './features/product/product-edit/product-edit.component';
import { ProductAddComponent } from './features/product/product-add/product-add.component';
import { ProductSingleComponent } from './features/product/product-single/product-single.component';
import { HomeComponent } from './features/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfiguration } from './app-entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './core/services/product.data-service';
import { ProductResolver } from './core/services/product.resolver';
import { TestComponent } from './core/test/test-component/test-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductSingleComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot(entityConfiguration),
  ],
  providers: [ProductDataService, ProductResolver],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    ProductDataService: ProductDataService
  ) {
    entityDataService.registerService('Product', ProductDataService);
  }
}
