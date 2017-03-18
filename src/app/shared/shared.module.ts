import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
  imports:      [  ],
  declarations: [  ],
  exports:      [  CommonModule, FormsModule, HttpModule, MdCardModule, MdButtonModule, MdIconModule ]
})
export class SharedModule { }