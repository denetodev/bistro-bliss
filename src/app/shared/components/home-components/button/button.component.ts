import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'button-default';
  @Input() link: string = '';
  @Input() customClass: string = 'button-default'; // Adiciona a propriedade customClass
  @Input() clickable: boolean = false; // Novo input para verificar se o botão é clicável
  @Output() onClick = new EventEmitter<void>(); // Evento de clique para emitir

  handleClick() {
    if (this.clickable) {
      this.onClick.emit();
    }
  }
}
