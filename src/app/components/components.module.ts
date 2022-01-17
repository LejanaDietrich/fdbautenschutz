import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

/* Components */
import { HeaderComponent } from "./header/header.component";


@NgModule({
  declarations: [
    HeaderComponent, 
  ],
  exports: [
    HeaderComponent, 
  ],
  imports: [
    CommonModule, RouterModule, IonicModule.forRoot(), FormsModule
  ]
})
export class GeneralComponentsModule { }
