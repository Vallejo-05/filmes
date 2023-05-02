export interface IAtores{
  nome: string;
  data: string;
  local: string;
  foto: string;
  genero: string;
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
