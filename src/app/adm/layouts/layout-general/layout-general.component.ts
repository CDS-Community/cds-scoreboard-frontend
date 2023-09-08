import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-general',
  templateUrl: './layout-general.component.html',
  styles: [
  ]
})
export class LayoutGeneralComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]
}
