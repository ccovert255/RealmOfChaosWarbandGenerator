import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarbandsListComponent } from './warbands-list.component';

describe('WarbandsListComponent', () => {
  let component: WarbandsListComponent;
  let fixture: ComponentFixture<WarbandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarbandsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarbandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
