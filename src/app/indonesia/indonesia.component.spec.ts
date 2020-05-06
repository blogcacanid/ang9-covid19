import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndonesiaComponent } from './indonesia.component';

describe('IndonesiaComponent', () => {
  let component: IndonesiaComponent;
  let fixture: ComponentFixture<IndonesiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndonesiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndonesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
