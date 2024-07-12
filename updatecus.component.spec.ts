import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecusComponent } from './updatecus.component';

describe('UpdatecusComponent', () => {
  let component: UpdatecusComponent;
  let fixture: ComponentFixture<UpdatecusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatecusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
