export interface Sillas {
    fk_funcion_sala:Number;
    reservadas:SillaP[];
    proceso:SillaP[];
    disponible:Silla[];
    reserva:Reserva;
}


export interface SillaP{
    v_estado:string;
    fk_silla:Silla;
}

export interface Silla{
    id:Number;
    pk_numero:string;
    v_tipo:string;
    i_orden :string;
}

export interface Reserva{
    id:Number;
    v_estado:string;
    t_inicioreserva:string;
    fk_persona:string;
}