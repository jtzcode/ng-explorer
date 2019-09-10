import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'change-detect-async',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        <div *ngFor="let item of items | async">{{item.title}}</div>
    `
})
export class ChangeDetectionAsyncComponent implements OnInit {
  title = 'change-detect-async';
  @Input() items: Observable<Item[]>;
  _items: Item[];
  
  constructor() {
  }

  ngOnInit() {
    this.items.subscribe(items => {
        this._items = items;
    });
  }
}