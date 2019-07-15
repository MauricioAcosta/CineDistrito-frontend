export interface UserList{
    count:Number;
    next:any;
    previuos:any;
    results:Results[];
}

export interface Results{
    fk_persona:Fk_persona;
    i_numpuntos:Number;
    i_numtarjeta:Number;
    d_fechapuntos:any;
}

export interface Fk_persona {
    pk_cedula:Number;
    username:string;
    first_name:string;
    last_name:string;
    email:string;
    is_active:boolean;
    date_joined:string;
    i_telefono:Number;
    v_direccion:string;
}
