import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptoComponent } from './apto.component';

describe('AptoComponent', () => {
  let component: AptoComponent;
  let fixture: ComponentFixture<AptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
