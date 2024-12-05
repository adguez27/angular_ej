import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
