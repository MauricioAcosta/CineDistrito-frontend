export interface ListaSnacks {
    count:Number;
    next:any;
    previous:any;
    results:Snack[];
}

export interface Snack{
    id:Number;
    v_tipo:string;
    v_nombre:string;
    tx_descripcion:string;
    i_precio:Number;
    i_puntosofrecidos:Number;
    selected?:boolean;
    cantidad?:Number;
}
