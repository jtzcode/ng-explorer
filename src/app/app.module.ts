import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CraftManDirective } from './directives/craft-man.directive';

@NgModule({
  declarations: [
    AppComponent,
    CraftManDirective
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
