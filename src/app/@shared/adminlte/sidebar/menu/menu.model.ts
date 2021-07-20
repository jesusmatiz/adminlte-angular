export class Menu {
  constructor(
    public id: number,
    public title: string,
    public routerLink: string,
    public href: string,
    public icon: string,
    public hasSubMenu: boolean,
    public subMenu: Array<SubMenu>
  ) { }
}

export class SubMenu {
  constructor(
    public id: number,
    public title: string,
    public routerLink: string,
    public icon: string
  ){ }
}