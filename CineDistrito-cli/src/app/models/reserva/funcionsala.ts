import { ObtenerPeliculas, Fkpelicula } from 'src/app/models/obtener-peliculas';

export interface Funcionsala {
    id: Number;
    fk_funcion: FKfuncion;
    fk_sala:FKsala
}

export interface FKsala{
    id: Number;
    i_numsala:Number;
    i_numpreferencial:Number;
    i_numgeneral:Number;
}

export interface FKfuncion{
    id: Number;
    v_estado: string;
    d_proyeccion: string;
    fk_pelicula: Fkpelicula;
    t_inicioproyeccion: string;
    t_finproyeccion: string;
}
