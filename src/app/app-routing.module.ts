import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { KategoriModule } from './kategori/kategori.module';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((mod) => mod.PublicModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'kategori',
    loadChildren: () =>
      import('./kategori/kategori.module').then((mod) => mod.KategoriModule),
  },
  {
    path: 'laptop',
    loadChildren: () =>
      import('./laptop/laptop.module').then((mod) => mod.LaptopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
