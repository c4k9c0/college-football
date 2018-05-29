import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoresComponent } from './components/scores/scores.component';

export const COMPONENTS = [
  ScoresComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ScoresModule { }
