export interface Salas {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
  id: number;
  i_numsala: number;
  i_numpreferencial: number;
  i_numgeneral: number;
  fk_multiplex: Fkmultiplex;
}

export interface Fkmultiplex {
  id: number;
  v_nombre: string;
  v_direccion: string;
  v_ciudad: string;
  i_minsalas: number;
  i_maxsalas: number;
}