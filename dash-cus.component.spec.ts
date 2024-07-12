import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCusComponent } from './dash-cus.component';

describe('DashCusComponent', () => {
  let component: DashCusComponent;
  let fixture: ComponentFixture<DashCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
