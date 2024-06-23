import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeAddDialogComponent } from './attribute-add-dialog.component';

describe('AttributeAddDialogComponent', () => {
  let component: AttributeAddDialogComponent;
  let fixture: ComponentFixture<AttributeAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
