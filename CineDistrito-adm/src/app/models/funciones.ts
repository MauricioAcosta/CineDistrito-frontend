interface Funciones {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
  }
  
  interface Result {
    id: number;
    v_estado: string;
    d_proyeccion: string;
    fk_pelicula: Fkpelicula;
    t_inicioproyeccion: string;
    t_finproyeccion: string;
  }
  
  interface Fkpelicula {
    id: number;
    v_nombre: string;
    i_duracion: number;
    tx_sinapsis: string;
    v_foto: string;
  }