import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsDetailComponent } from './actors-detail.component';

describe('ActorsDetailComponent', () => {
  let component: ActorsDetailComponent;
  let fixture: ComponentFixture<ActorsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
