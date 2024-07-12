import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MancusComponent } from './mancus.component';

describe('MancusComponent', () => {
  let component: MancusComponent;
  let fixture: ComponentFixture<MancusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MancusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MancusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
