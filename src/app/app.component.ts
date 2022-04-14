import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iframe';

  #parentWindow = window.parent

  sent$: Observable<string> = interval(1000).pipe(
    map(time => {
      const message = `Message from iframe v2: ${time}`
      console.warn({parent: this.#parentWindow});
      this.#parentWindow.postMessage(message /*todo: targetOrigin*/);
      return message;
    })
  );

  ngOnInit(): void {  }
}
