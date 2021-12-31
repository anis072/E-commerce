import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyGridLeftComponent } from './categroy-grid-left.component';

describe('CategroyGridLeftComponent', () => {
  let component: CategroyGridLeftComponent;
  let fixture: ComponentFixture<CategroyGridLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategroyGridLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategroyGridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
