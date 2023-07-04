import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesRouteComponent } from './dishes-route.component';

describe('DishesRouteComponent', () => {
  let component: DishesRouteComponent;
  let fixture: ComponentFixture<DishesRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesRouteComponent]
    });
    fixture = TestBed.createComponent(DishesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
