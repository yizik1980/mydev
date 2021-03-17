import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../services/dialog.service';
import {GlobalLoaderComponent} from './global-loader/global-loader.component';
import {PersonDetailsComponent} from './person-details/person-details.component'
 
@NgModule({
  declarations: [
    DialogComponent,
    GlobalLoaderComponent,
    PersonDetailsComponent
  ],
  imports: [CommonModule,
     FormsModule],
  exports: [
    DialogComponent,
     GlobalLoaderComponent
  ],
  providers: [DialogService],
})
export class DialogModule {}
