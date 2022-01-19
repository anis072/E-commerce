import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatContainerComponent } from './feat-container.component';

describe('FeatContainerComponent', () => {
  let component: FeatContainerComponent;
  let fixture: ComponentFixture<FeatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
