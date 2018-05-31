import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresRoutingModule } from './scores-routing.module';

import { ScoresComponent } from './components/scores/scores.component';

export const COMPONENTS = [
  ScoresComponent
];

@NgModule({
  imports: [
    CommonModule,
    ScoresRoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ScoresModule { }
