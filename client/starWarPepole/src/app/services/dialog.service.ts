import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DialogData } from '../ui/model/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  subjectType = new Subject<DialogData>();
  constructor() {

  }
  method() { }
}
