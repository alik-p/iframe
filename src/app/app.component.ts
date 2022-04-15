import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { interval, map, Observable, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  control = new FormControl(null, Validators.required);

  title = 'iframe';

  sent: string[] = [];

  #parentWindow = window.parent



  /*sent$: Observable<string> = interval(1000).pipe(
    map(time => {
      const message = `Message from iframe v0.0.3: ${time}`;
      this.#parentWindow.postMessage(message, '*' /!*todo: targetOrigin*!/);
      return message;
    })
  );*/

  ngOnInit(): void {
    console.warn({parent: this.#parentWindow})
  }

  onSend(): void {
    const message = this.control.value;
    this.sent = [message, ...this.sent];
    this.#parentWindow.postMessage(message, '*' /*todo: targetOrigin*/);
  }
}
