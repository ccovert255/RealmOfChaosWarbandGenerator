import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorAddDialogComponent } from './armor-add-dialog.component';

describe('ArmorAddDialogComponent', () => {
  let component: ArmorAddDialogComponent;
  let fixture: ComponentFixture<ArmorAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmorAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmorAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
