import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-explorer';
  
  private seed: number = 0;
  constructor() {
    this.seed =  Math.floor(Math.random() * 10);
  }

  public getFlag(): boolean {
    return this.seed % 2 == 0;
  }
}
