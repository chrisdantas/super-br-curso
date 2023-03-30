import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaProdutosComponent } from './alerta-produtos.component';

describe('AlertaProdutosComponent', () => {
  let component: AlertaProdutosComponent;
  let fixture: ComponentFixture<AlertaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
