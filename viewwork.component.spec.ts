import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewworkComponent } from './viewwork.component';

describe('ViewworkComponent', () => {
  let component: ViewworkComponent;
  let fixture: ComponentFixture<ViewworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
