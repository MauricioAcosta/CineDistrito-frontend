export interface ObtenerPeliculas {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Result {
  id: number;
  v_estado: string;
  d_proyeccion: string;
  fk_pelicula: Fkpelicula;
  t_inicioproyeccion: string;
  t_finproyeccion: string;
}

export interface Fkpelicula {
  id: number;
  v_nombre: string;
  i_duracion: number;
  tx_sinapsis: string;
  v_foto: string;
}