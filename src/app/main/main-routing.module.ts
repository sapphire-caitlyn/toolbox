import { ModelViewControllerGeneratorComponent } from './pages/model-view-controller-generator/model-view-controller-generator.component';
import { DefComponent } from './../def/def.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children : [
      {
        path: '',
        redirectTo: 'generator',
        pathMatch: 'full'
      },
      {
        path: 'def',
        component: DefComponent
      },
      {
        path: 'generator',
        component: ModelViewControllerGeneratorComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
