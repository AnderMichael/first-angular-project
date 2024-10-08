import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1CompComponent } from './provider1-comp/provider1-comp.component';
import { Provider2CompComponent } from './provider2-comp/provider2-comp.component';



@NgModule({
  declarations: [Provider1CompComponent, Provider2CompComponent],
  imports: [
    CommonModule
  ],
  exports: [Provider1CompComponent, Provider2CompComponent],
})
export class ProviderModule { }
