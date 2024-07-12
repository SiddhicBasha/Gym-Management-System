import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcusComponent } from './viewcus.component';

describe('ViewcusComponent', () => {
  let component: ViewcusComponent;
  let fixture: ComponentFixture<ViewcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
