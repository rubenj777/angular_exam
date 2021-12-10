import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayStatComponent } from './display-stat/display-stat.component';
import { StatListComponent } from './stat-list/stat-list.component';
import { CreateStatComponent } from './create-stat/create-stat.component';

@NgModule({
  declarations: [AppComponent, DisplayStatComponent, StatListComponent, CreateStatComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
