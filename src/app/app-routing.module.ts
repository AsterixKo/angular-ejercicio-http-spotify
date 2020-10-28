import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './share/components/home/home.component';
import { NewReleasesComponent } from './share/components/home/new-releases/new-releases.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new-releases/:code', component: NewReleasesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
