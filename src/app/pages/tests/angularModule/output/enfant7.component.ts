import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-enfant7',
  template: `
    <input
      style="width:300px;"
      placeholder="Envoie un message à ton père ici"
      class="form-control  my-3"
      type="text"
      (input)="handleChange($event)"
    />
    <button class="btn btn-success" (click)="sendMessage()">
      Dis bonjour à papa
    </button>
  `,
})
export class Enfant7Component {
  @Output() dataSent = new EventEmitter<string>();
  @Output() message = new EventEmitter<string>();

  sendMessage() {
    this.dataSent.emit('Bonjour Papa !');
  }
  handleChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.message.emit(target.value);
  }
}
