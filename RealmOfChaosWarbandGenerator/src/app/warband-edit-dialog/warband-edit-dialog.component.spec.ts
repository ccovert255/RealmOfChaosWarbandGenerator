import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarbandEditDialogComponent } from './warband-edit-dialog.component';

describe('WarbandEditDialogComponent', () => {
  let component: WarbandEditDialogComponent;
  let fixture: ComponentFixture<WarbandEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarbandEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarbandEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
