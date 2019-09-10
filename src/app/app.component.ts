import { Component } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-explorer';
  observableItems: Observable<number>;
  items = [];
  items$ = new BehaviorSubject(this.items);

  add() {
    this.items.push(new Item(Math.random().toString(), "TITLE"));
    this.items$.next(this.items);
  }

  constructor() {
    this.observableItems = timer(100, 100).pipe(take(101));
  }
}
