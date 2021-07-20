import { Component, OnInit } from '@angular/core';
import { MENU } from './menu/menu';
import { Menu } from './menu/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: Array<Menu> = MENU;

  constructor() {
  }

  ngOnInit(): void { }
}
