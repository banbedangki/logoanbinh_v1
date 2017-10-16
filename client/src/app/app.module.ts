import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DesignsComponent } from './designs/designs.component';
import { AboutComponent } from './about/about.component';
import { ConstructionComponent } from './construction/construction.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignsComponent,
    AboutComponent,
    ConstructionComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
