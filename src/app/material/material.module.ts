import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';






@NgModule({
  exports: [
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
