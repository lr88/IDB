import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUnsamComponent } from './barra-unsam.component';

describe('BarraUnsamComponent', () => {
  let component: BarraUnsamComponent;
  let fixture: ComponentFixture<BarraUnsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraUnsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraUnsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
