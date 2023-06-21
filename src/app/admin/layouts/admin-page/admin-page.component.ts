import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  public menuItems: MenuItem[] = [
    { route: '/admin/inicio', name: 'Inicio'},
    { route: '/admin/calendario', name: 'Calendario'},
    { route: '/admin/capacitadores', name: 'Capacitadores'},
  ]


}
