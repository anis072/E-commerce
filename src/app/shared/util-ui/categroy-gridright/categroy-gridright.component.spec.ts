import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategroyGridrightComponent } from './categroy-gridright.component';

describe('CategroyGridrightComponent', () => {
  let component: CategroyGridrightComponent;
  let fixture: ComponentFixture<CategroyGridrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategroyGridrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategroyGridrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
