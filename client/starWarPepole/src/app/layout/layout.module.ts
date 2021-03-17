import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PepoleGridComponent } from './pepole-grid/pepole-grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';



@NgModule({
  exports:[PepoleGridComponent],
  declarations: [PepoleGridComponent, GridItemComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
