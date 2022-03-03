import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallerComponent } from './components/taller/taller.component';

const routes: Routes = [ 
  { path: '', redirectTo:'/Taller', pathMatch:'full'},
  { path: 'Taller', component:TallerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
