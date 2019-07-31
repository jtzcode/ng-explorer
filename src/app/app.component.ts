import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-explorer';
  
  private seed: number = 0;
  constructor(private translateService: TranslateService) {
    this.seed =  Math.floor(Math.random() * 10);
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  public changeLanguage(): void {
    this.translateService.currentLang === 'en' ? this.translateService.use('zh') : this.translateService.use('en');
  }

  public getFlag(): boolean {
    return this.seed % 2 == 0;
  }
}
