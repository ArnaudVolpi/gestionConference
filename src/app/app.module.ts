import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

//Api
import { DataRenderService } from './data-render.service';
import { ApiService } from './api/api.service';

//ROUTING
import { AppRouting } from './app.routing'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Angular Material

import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    MatToolbarModule,

    
  ],
  providers: [DataRenderService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
