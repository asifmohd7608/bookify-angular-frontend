import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss'],
})
export class PopupMessageComponent {
  @Input() message: { message: string } = { message: '' };
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      setTimeout(() => {
        this.message.message = '';
      }, 3000);
    }
  }
}
