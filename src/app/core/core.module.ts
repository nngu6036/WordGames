import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [  ],
  exports:      [  ],
  providers:    [ MdIconRegistry ]
})
export class CoreModule {
}