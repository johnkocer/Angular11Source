import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LowercasePipePipe } from './lowercase-pipe.pipe';
import { NamePipe } from './name.pipe';
import { BuildinPipesComponent } from './buildin-pipes/buildin-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    LowercasePipePipe,
    NamePipe,
    BuildinPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
