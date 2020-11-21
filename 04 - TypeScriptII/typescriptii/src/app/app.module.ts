import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PrintComponent } from './print/print.component';
import { Select01Component } from './select01/select01.component';
import { Select02Component } from './select02/select02.component';
import { Select03Component } from './select03/select03.component';
import { ClassesComponent } from './classes/classes.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ListsComponent } from './lists/lists.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HashtagComponent } from './hashtag/hashtag.component';


@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    Select01Component,
    Select02Component,
    Select03Component,
    ClassesComponent,
    InterfacesComponent,
    ListsComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectivesComponent,
    HashtagComponent
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
