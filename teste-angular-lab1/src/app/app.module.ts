import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AlertaProdutosComponent } from './alerta-produtos/alerta-produtos.component';
import { DetalheProdutosComponent } from './detalhe-produtos/detalhe-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntregaComponent } from './entrega/entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListaProdutosComponent,
    AlertaProdutosComponent,
    DetalheProdutosComponent,
    CarrinhoComponent,
    EntregaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
