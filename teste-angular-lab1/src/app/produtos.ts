export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
}
export const produtos = [
  {
    id: 1,
    nome: 'Telefone Samsung',
    preco: 799,
    descricao: 'Celular com novas funções e ótima câmera',
  },
  {
    id: 2,
    nome: 'Telefone Iphone',
    preco: 699,
    descricao: 'Celular muito tecnológico com tela muito boa',
  },
  {
    id: 3,
    nome: 'Telefone Motorola',
    preco: 299,
    descricao: '',
  },
];
