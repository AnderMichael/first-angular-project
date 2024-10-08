import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1CompComponent } from './shared1-comp/shared1-comp.component';
import { Shared2DirectivaComponent } from './shared2-directiva/shared2-directiva.component';
import { Shared3PipeComponent } from './shared3-pipe/shared3-pipe.component';



@NgModule({
  declarations: [Shared1CompComponent, Shared2DirectivaComponent, Shared3PipeComponent],
  imports: [
    CommonModule
  ],
  exports: [Shared1CompComponent, Shared2DirectivaComponent, Shared3PipeComponent]
})
export class SharedModule { }
