import { ButtonComponent } from './../button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})

export class SharedModule { }
