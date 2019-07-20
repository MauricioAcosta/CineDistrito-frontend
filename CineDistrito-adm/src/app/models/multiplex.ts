export interface Multiplex {
    count: number;
    next?: any;
    previous?: any;
    results: Result[];
}

export interface Result {
    id: number;
    v_nombre: string;
    v_direccion: string;
    v_ciudad: string;
    i_minsalas: number;
    i_maxsalas: number;
}