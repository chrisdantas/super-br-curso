import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CarrinhoService } from './../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent {

  itens = this.carrinhoService.pegarItens();

  finalizarForm = this.formBuilder.group({
    nome: '',
    endereco: '',
  });

  constructor(
    private carrinhoService: CarrinhoService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.itens = this.carrinhoService.limparCarrinho();
    console.warn('Seu pedido foi enviado', this.finalizarForm.value);
    this.finalizarForm.reset();
  }
}
