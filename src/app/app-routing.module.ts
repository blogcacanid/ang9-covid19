import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndonesiaComponent } from './indonesia/indonesia.component';
import { DuniaComponent } from './dunia/dunia.component';
 
 
const routes: Routes = [
  {path: '', redirectTo: 'indonesia', pathMatch: 'full'},
  {path: 'indonesia', component: IndonesiaComponent},
  {path: 'dunia', component: DuniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }