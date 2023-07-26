import { Component, ElementRef, Renderer2, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [`

    /* Estilos para el overlay */
.confirmation-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInOverlay 0.1s;
  backdrop-filter: blur(5px);
}

/* Estilos para la ventana de confirmación */
.confirmation-dialog {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: fadeInDialog 0.1s;
}

/* Ajusta los estilos de los botones según tus necesidades */
.btn {
  margin-right: 10px;
}

.buttons{
  margin: 1rem auto;
}

/* Animación para el overlay */
@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Animación para la ventana de confirmación */
@keyframes fadeInDialog {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

  `]
})
export class ConfirmDialogComponent {

  public dialogRef = inject(MatDialogRef);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef<HTMLElement>)

  ngAfterViewInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'confirmation-dialog-show');
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
