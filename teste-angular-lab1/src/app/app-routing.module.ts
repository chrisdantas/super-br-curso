import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { EntregaComponent } from './entrega/entrega.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  {path: '', component: ListaProdutosComponent},
  { path: 'produtos/:productId', component: DetalheProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'entrega', component: EntregaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
