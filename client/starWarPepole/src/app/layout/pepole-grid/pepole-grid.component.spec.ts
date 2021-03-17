import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepoleGridComponent } from './pepole-grid.component';

describe('PepoleGridComponent', () => {
  let component: PepoleGridComponent;
  let fixture: ComponentFixture<PepoleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepoleGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepoleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
