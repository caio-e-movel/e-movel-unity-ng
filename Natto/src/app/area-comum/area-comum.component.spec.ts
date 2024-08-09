import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaComumComponent } from './area-comum.component';

describe('AreaComumComponent', () => {
  let component: AreaComumComponent;
  let fixture: ComponentFixture<AreaComumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaComumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaComumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
