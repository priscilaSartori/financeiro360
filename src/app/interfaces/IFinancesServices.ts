export interface ComprasParceladas { 
  id: number, 
  descricao: string, 
  valor: number, 
  parcelas: number, 
  categoria: string, 
  meses: string[] 
}[] = [];

export interface IDespesa { 
  id: number, 
  categoria: string, 
  descricao: string, 
  valor: number, 
  vencimento: string,
}[] = [];

export interface IReceita {
  id: number, 
  descricao: string, 
  valor: number, 
  data: string,
}[] = [];

export interface IGastos {
  id: number, 
  data: string, 
  descricao: string, 
  formaPagamento: string, 
  valor: number, 
  categoria: string
}[] = [];

export interface IInvestimento {
  id: number,
  ativo: string;
  produto: string;
  transacao: string;
  corretora: string;
  data: string;
  quantidade: number;
  preco: number;
  valor: number;
}[] = [];

export interface IMeta {
  id: number,
  meta: string;
  prazo: string;
  status: string;
}[] = [];