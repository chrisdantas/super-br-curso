import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-alerta-produtos',
  templateUrl: './alerta-produtos.component.html',
  styleUrls: ['./alerta-produtos.component.scss']
})
export class AlertaProdutosComponent {
  @Input() produto!: Produto; // decorate the property with @Input()
  @Output() alerta= new EventEmitter();
}
