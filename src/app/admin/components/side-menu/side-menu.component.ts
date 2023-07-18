import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
  icon: string;
  subitems?: MenuItem[];
}

@Component({
  selector: 'admin-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {


  private router = inject( Router );



  menuItems: MenuItem[] = [
    { route: '/admin/inicio',
      name: 'Inicio',
      icon: 'home'
    },
    {
      route: '/admin/eventos',
      name: 'Eventos',
      icon: 'event',
      subitems: [
        { route: '/admin/eventos/agregar', name: 'Agregar Evento', icon: 'add_box' },
        { route: '/admin/eventos/lista', name: 'Lista Eventos', icon: 'event_list' },
      ]
    },
    {
      route: '/admin/capacitadores',
      name: 'Capacitadores',
      icon: 'school',
      subitems: [
        { route: '/admin/capacitadores/agregar', name: 'Agregar Capacitador', icon: 'person_add' },
        { route: '/admin/capacitadores/lista', name: 'Lista Capacitadores', icon: 'group' },
      ]
    },
  ];

  redirectToFirstSubitem(subitems: MenuItem[]): void {
    if (subitems && subitems.length > 0) {
      const firstSubitemRoute = subitems[0].route;
      this.router.navigateByUrl(firstSubitemRoute);
    }
  }

}
