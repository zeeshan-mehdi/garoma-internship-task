import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponentComponent } from './grid-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GridComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    GridComponentComponent
  ]
})
export class GridComponentModule { }
