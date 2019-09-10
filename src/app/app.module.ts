import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './components/change-detection.component';
import { ChangeDetectionAsyncComponent } from './components/change-detection-async.component';
import { CraftManDirective } from './directives/craft-man.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ChangeDetectionAsyncComponent,
    CraftManDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
