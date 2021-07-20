import { Menu, SubMenu } from "./menu.model";

export const MENU = [
  new Menu(1, 'Dashboard', '/', '', 'fa-tachometer-alt', false, []),
  new Menu(2, 'Administración', '', '#', 'fa-tv', true, [
    new SubMenu(3, 'Usuarios', '/users', 'fa-users'),
    new SubMenu(4, 'Perfiles', '/profiles', 'fa-id-card')
  ]),
  new Menu(5, 'Mi cuenta', '/account', '', 'fa-tools', false, []),
];