import { produtos } from './../produtos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent {
  produtos = produtos;

  compartilhar() {
    window.alert('O produto foi compartilhado!');
  }

  onAlerta() {
    window.alert('Quando o produto estiver em promoção, você será avisado');
  }
}
