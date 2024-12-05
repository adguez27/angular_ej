import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'tictactoe', component: TictactoeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
