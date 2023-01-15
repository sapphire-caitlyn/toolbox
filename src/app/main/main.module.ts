import { ModelViewControllerGeneratorComponent } from './pages/model-view-controller-generator/model-view-controller-generator.component';
import { DefComponent } from './../def/def.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SharedModule } from '../components/shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [MainPage, DefComponent, ModelViewControllerGeneratorComponent]
})
export class MainPageModule {}
