import { Component, inject } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  private dialog = inject(MatDialog)


  openDialog(): void {
    this.dialog.open(PopupComponent, {
      width: '45%',
  });
}

}
