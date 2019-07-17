export interface Peliculas {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}

export interface Result {
    id: number;
    v_nombre: string;
    i_duracion: number;
    tx_sinapsis: string;
    v_foto: string;
}