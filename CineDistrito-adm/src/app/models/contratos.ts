export interface Contratos {
    count: number;
    next?: any;
    previous?: any;
    results: Result[];
}

export interface Result {
    id: number;
    v_tipocontrato: string;
    d_iniciocontrato: string;
    i_salario: number;
}