import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1CompComponent } from './product1-comp/product1-comp.component';
import { Product2CompComponent } from './product2-comp/product2-comp.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Product1CompComponent, Product2CompComponent],
  imports: [CommonModule, SharedModule],
  exports: [Product1CompComponent, Product2CompComponent],
})
export class ProductModule {}
