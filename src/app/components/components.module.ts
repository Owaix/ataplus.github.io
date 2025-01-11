import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Header } from "./landing_page/header/header.component";
import { Main } from "./landing_page/main/main.component";
import { Footer } from "./landing_page/footer/footer.component";
import { ReasonItem } from "./landing_page/main/reason/reason.component";
import { ArticleItem } from "./landing_page/main/article/article.component";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "../service/auth.service";
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { EncryptionService } from "../service/encrypt.service";
import { ModalComponent } from './shared/modal/modal.component';
import { AuthGuard } from "../service/auth.guard";
import { SubFooter } from "./landing_page/subfooter/footer.component";
import { WhyAtaplus } from "./landing_page/whyataplus/whyataplus.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from "./landing_page/main/mobileslider/slidercomponent.component";
import { AboutECF } from "./landing_page/aboutecf/aboutecf.component";
import { HomeComponent } from './pages/home/home.component';
import { MobileSlideComponent } from "./shared/mobileslider/slidercomponent.component";
import { ExsliderComponent } from './shared/exslider/exslider.component';
import { WebSliderComponent } from "./shared/webslider/carousal.component";
import { VerifyComponent } from "./pages/verify/verify.component";

const routes: Routes = [
  { path: '', component: Main, data: { showHeader: true }, },  // Redirect from MasterPageComponent
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'whyata', component: WhyAtaplus },
  { path: 'whatecf', component: AboutECF },
  { path: 'home', component: HomeComponent },
  { path: 'verify/:type/:phoneno', component: VerifyComponent },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    Header,
    Main,
    AboutECF,
    Footer,
    SubFooter,
    ReasonItem,
    ArticleItem,
    LoginComponent,
    SignupComponent,
    EmailVerificationComponent,
    ModalComponent,
    SliderComponent,
    WhyAtaplus,
    WebSliderComponent,
    HomeComponent,
    MobileSlideComponent,
    ExsliderComponent,
    VerifyComponent
  ],
  providers: [ApiService, AuthService, EncryptionService],
  exports: [
    Header,
    Main,
    AboutECF,
    WhyAtaplus,
    Footer,
    SubFooter,
    ReasonItem,
    ArticleItem,
    RouterModule
  ]
})

export class ComponentModules { }
