import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'admin-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/admin/inicio', name: 'Inicio', icon:'home'},
    { route: '/admin/calendario', name: 'Calendario', icon:'calendar_month'},
    { route: '/admin/capacitadores', name: 'Capacitadores', icon:'school'},
    { route: '/admin/nuevo-evento', name: 'Nuevo Evento', icon:'calendar_add_on'},
  ];

  public activeRoute: string = '/admin/inicio'; // Inicialmente establece la ruta activa como la primera opción

}
