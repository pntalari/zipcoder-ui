import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabFormComponent } from './lab/form/lab-form.component';


const routes: Routes = [
  {path: 'auth/:provider/callback', component: AuthComponent},

  // lab
  {path: 'labs/new', component: LabFormComponent},
  {path: 'labs/:id/show', component: LabShowComponent},
  {path: 'labs', component: LabIndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
