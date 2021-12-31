import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSilderComponent } from './main-silder.component';

describe('MainSilderComponent', () => {
  let component: MainSilderComponent;
  let fixture: ComponentFixture<MainSilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
