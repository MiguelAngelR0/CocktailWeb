import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngredientComponent } from './modal-ingredient.component';

describe('ModalIngredientComponent', () => {
  let component: ModalIngredientComponent;
  let fixture: ComponentFixture<ModalIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIngredientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
