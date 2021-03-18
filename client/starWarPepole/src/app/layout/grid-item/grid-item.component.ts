import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import starWarPerson from 'src/app/model/starWarPerson';
import { DialogService } from 'src/app/services/dialog.service';
import { StarWarInfoService } from 'src/app/services/star-war-info.service';
import { DialogData } from 'src/app/ui/model/dialog-data';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GridItemComponent implements OnInit {
  @Input()
  personItem: starWarPerson;
  constructor(private dialog:DialogService, private swService:StarWarInfoService) { }

  ngOnInit(): void {
  }
  showPerson(index:string){
    debugger;
    const dialog = new DialogData('person',true);
    if(index){
      this.swService.getOnePerson(index).subscribe(personItem=>{
  
        this.swService.getFilms(personItem.films).then(films=>{

        this.swService.getSpecies(personItem.species).then(species=>{

          dialog.dynamicObject = {personItem,films, species };  

        }).finally(()=>{
          this.dialog.subjectType.next(dialog);
        });
      });
    
      });
    }
    
  }

}
