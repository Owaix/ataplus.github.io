import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/auth.interceptor';
import { ComponentModules } from './components/components.module';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { VerifyComponent } from './components/pages/verify/verify.component';
import { CommonModule } from '@angular/common';
import { EmailVerificationComponent } from './components/pages/email-verification/email-verification.component';
import { LoaderComponent } from './components/shared/loader/loader/loader.component';

const routes: Routes = [
  { path: 'everif/:phoneno/:type', component: EmailVerificationComponent }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions),
    ComponentModules,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
