import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { AuthGuard } from "./pages/guard/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { PagesComponent } from "./pages/pages.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
  ]
},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'not-found', component: NotFoundComponent },
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
          relativeLinkResolution: 'legacy', // legacy
          useHash: false
      })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }