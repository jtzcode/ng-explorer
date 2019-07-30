import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CraftManDirective } from './directives/craft-man.directive';
import { I18nComponent } from './components/i18n/i18n.component';

@NgModule({
  declarations: [
    AppComponent,
    CraftManDirective,
    I18nComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
