import { MainPageModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DefComponent } from './def/def.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/main/main.module').then( m => m.MainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
