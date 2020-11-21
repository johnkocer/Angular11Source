import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildinDirectivesComponent } from './buildin-directives/buildin-directives.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { NumberPageComponent } from './number-page/number-page.component';
import { PrintScreenDirective } from './print-screen.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuildinDirectivesComponent,
    NumbersOnlyDirective,
    NumberPageComponent,
    PrintScreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
