import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuniaComponent } from './dunia.component';

describe('DuniaComponent', () => {
  let component: DuniaComponent;
  let fixture: ComponentFixture<DuniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
