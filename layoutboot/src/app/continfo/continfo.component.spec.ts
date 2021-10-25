import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinfoComponent } from './continfo.component';

describe('ContinfoComponent', () => {
  let component: ContinfoComponent;
  let fixture: ComponentFixture<ContinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
