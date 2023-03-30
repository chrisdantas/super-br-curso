import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss'],
})
export class EntregaComponent {
  custosEntrega!: Observable<{ tipo: string; preco: number }[]>;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.custosEntrega = this.carrinhoService.pegarPrecosEntrega();
  }
}
