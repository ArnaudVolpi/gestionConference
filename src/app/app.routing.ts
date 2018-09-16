import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import{AppComponent} from './app.component';
import {HomeComponent}  from './home/home.component'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

export const appRoutes: Routes = [
  { path: 'add', component: HomeComponent },
  { path: '', component: HomeComponent },
];


export const AppRouting = RouterModule.forRoot(appRoutes, {
  //enableTracing: true,
  preloadingStrategy: PreloadAllModules
});