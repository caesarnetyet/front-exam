import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FormulariosComponent } from './components/users/formularios/formularios.component';
import { BearerGuard } from './guards/bearer.guard';

const routes: Routes = [
  {
    path: 'home', component: FormulariosComponent,
  },
  {
    path: 'menu', component: MenuComponent, canActivate: [BearerGuard]
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
