import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import Paging from 'src/app/model/paging';
import starWarPerson from 'src/app/model/starWarPerson';
import { StarWarInfoService } from 'src/app/services/star-war-info.service';


@Component({
  selector: 'app-pepole-grid',
  templateUrl: './pepole-grid.component.html',
  styleUrls: ['./pepole-grid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PepoleGridComponent implements OnInit, OnChanges, OnDestroy {
  subscription = new Subscription();
  constructor(private swService: StarWarInfoService, private changeRef:ChangeDetectorRef) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.props = ['name','height','mass','hair color', 'skin color','gender','birth year'];
    this.setGridPage(1).then(()=>{
      this.swService.getPagesData().subscribe(result=>{
        let rows = this.starwarPeople.length;
        let len = result.amount;
        this.paging = new Paging(len,rows);
        this.paging.setCurrent(1);
        this.changeRef.detectChanges();
      })
    })
  
  }
  setGridPage(i:number){
    return this.swService.getAllPepole(i).toPromise().then(res => {
      this.starwarPeople = res;
      this.changeRef.detectChanges();
    });
  }
  starwarPeople: starWarPerson[];
  length:number;
  props:string[];
  direction = {};
  paging = new Paging(0,0);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.starwarPeople.currentValue , changes.length.currentValue)
    if(changes.starwarPeople.currentValue && changes.length.currentValue){
      let rows = parseInt(changes.starwarPeople.currentValue.length);
      let len = parseInt(changes.length.currentValue)
      this.paging = new Paging(len,rows);
      this.changeRef.detectChanges();
    }
    
  }

  ///
  // sort each column using its own prop Name
  sort(prop:string){
        prop = prop.trim().replace(/\s/g,'_');
        let sortedArr = this.starwarPeople.sort((a, b)=>{
          if(a[prop] < b[prop]) { return -1; }
          if(a[prop] > b[prop]) { return 1; }
          return 0;
        });
        if(!this.direction[prop] || this.direction[prop] == 'descend'){
          this.starwarPeople = sortedArr;
          this.direction[prop] = 'ascend';
        }else{
          this.starwarPeople = sortedArr.reverse();
          this.direction[prop] = 'descend';
        }

        
  }


  showPage(page:number){
    this.setGridPage(page)
    this.paging.setCurrent(page)
  }
}
