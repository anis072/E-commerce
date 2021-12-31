import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyGridComponent } from './categroy-grid.component';

describe('CategroyGridComponent', () => {
  let component: CategroyGridComponent;
  let fixture: ComponentFixture<CategroyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategroyGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategroyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
