import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'tracker', pathMatch:'full'},
  { path: 'tracker', loadChildren: () => import('./tracker/tracker.module').then(m => m.TrackerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
