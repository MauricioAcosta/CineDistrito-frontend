interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Inicio',
    url: '/inicio',
    icon: 'icon-home'
  },
  {
    title: true,
    name: 'Consultas'
  },
  {
    name: 'Consulta General',
    url: '/menu/basic-consult-peli',
    icon: 'icon-magnifier'
  },
  {
    name: 'Agregar Usuarios',
    url: '/menu/add-user',
    icon: 'cui-user'
  },
  {
    name: 'Agregar Funciones',
    url: '/menu/add-funciones',
    icon: 'cui-task'
  },
  {
    name: 'Agregar Sala a función',
    url: '/menu/add-sala',
    icon: 'cui-task'
  },
  {
    divider: true
  },


];
