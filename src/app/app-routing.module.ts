import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';
import { CounterComponent } from './basic/counter/counter.component';
import { FatherComponent } from './basic/father/father.component';

const routes: Routes = [
  {
    path: 'basic/counter', component: CounterComponent
  },
  {
    path: 'basic/counter/:initial', component: CounterRouteComponent
  },
  {
    path:'charizard', component: CharizardComponent
  },
  {
    path:'father', component: FatherComponent
  },
  {
     path: '**', redirectTo: 'basic/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
