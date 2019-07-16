export interface Personas {
    count: number;
    next?: any;
    previous?: any;
    results: Result[];
  }
  
  export interface Result {
    pk_cedula: number;
    password: string;
    last_login?: string;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    i_telefono: number;
    v_direccion: string;
    groups: any[];
    user_permissions: any[];
  }