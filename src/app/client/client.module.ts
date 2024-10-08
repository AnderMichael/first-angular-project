import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1CompComponent } from './client1-comp/client1-comp.component';
import { Client2CompComponent } from './client2-comp/client2-comp.component';
import { SharedModule } from '../shared/shared.module';
import { ProviderModule } from '../provider/provider.module';

@NgModule({
  declarations: [Client1CompComponent, Client2CompComponent],
  imports: [CommonModule, SharedModule, ProviderModule],
  exports: [Client1CompComponent, Client2CompComponent],
})
export class ClientModule {}
