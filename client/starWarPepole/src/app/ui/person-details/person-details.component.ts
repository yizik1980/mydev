import { Component, Input, OnInit } from '@angular/core';
import { film } from 'src/app/model/film';
import { specy } from 'src/app/model/specy';
import starWarPerson from 'src/app/model/starWarPerson';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input()
  person:{ personItem: starWarPerson; species:specy[],films:film[]};
  constructor() { }

  ngOnInit(): void {
    
  }

}
