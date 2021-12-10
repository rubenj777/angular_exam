import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatListComponent } from './stat-list/stat-list.component';
import { CreateStatComponent } from './create-stat/create-stat.component';

const routes: Routes = [
  { path: 'stat-list', component: StatListComponent },
  { path: 'create-stat', component: CreateStatComponent },
  { path: '**', component: StatListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
