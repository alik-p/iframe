import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  control = new FormControl(null, Validators.required);

  sent: { machineId: number }[] = [];

  #parentWindow = window.parent;

  onSend(): void {
    const message = { machineId: this.control.value };
    this.sent = [message, ...this.sent];
    this.#parentWindow.postMessage(
      message,
      '*' /*todo: targetOrigin*/
    );
  }
}
