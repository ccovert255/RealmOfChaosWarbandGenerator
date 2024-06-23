import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardAddDialogComponent } from './reward-add-dialog.component';

describe('RewardAddDialogComponent', () => {
  let component: RewardAddDialogComponent;
  let fixture: ComponentFixture<RewardAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
