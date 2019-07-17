interface Salas {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
  }
  
  interface Result {
    id: number;
    fk_funcion: Fkfuncion;
    fk_sala: Fksala;
  }
  
  interface Fksala {
    id: number;
    i_numsala: number;
    i_numpreferencial: number;
    i_numgeneral: number;
    fk_multiplex: Fkmultiplex;
  }
  
  interface Fkmultiplex {
    id: number;
    v_nombre: string;
    v_direccion: string;
    v_ciudad: string;
    i_minsalas: number;
    i_maxsalas: number;
  }
  
  interface Fkfuncion {
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