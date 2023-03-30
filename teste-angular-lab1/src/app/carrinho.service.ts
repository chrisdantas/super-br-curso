import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from './produtos';
@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: Produto[] = [];

  constructor(private http: HttpClient) {}

  adicionarCarrinho(produto: Produto) {
    this.itens.push(produto);
  }

  pegarItens() {
    return this.itens;
  }
  limparCarrinho() {
    this.itens = [];
    return this.itens;
  }

  pegarPrecosEntrega() {
    return this.http.get<{ tipo: string; preco: number }[]>(
      '/assets/entrega.json'
    );
  }
}
