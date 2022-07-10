import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AppShowcaseDemoComponent } from './pages/app-showcase-demo/app-showcase-demo.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BusinessAgencyDemoComponent } from './pages/business-agency-demo/business-agency-demo.component';
import { BusinessConsultingDemoComponent } from './pages/business-consulting-demo/business-consulting-demo.component';
import { CreativeAgencyDemoComponent } from './pages/creative-agency-demo/creative-agency-demo.component';
import { CyberSecurityAgencyDemoComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';
import { DigitalAgencyDemoComponent } from './pages/digital-agency-demo/digital-agency-demo.component';
import { DigitalMarketingDemoComponent } from './pages/digital-marketing-demo/digital-marketing-demo.component';
import { FreelancerPortfolioDemoComponent } from './pages/freelancer-portfolio-demo/freelancer-portfolio-demo.component';
import { ItAgencyDemoComponent } from './pages/it-agency-demo/it-agency-demo.component';
import { MarketingAgencyDemoComponent } from './pages/marketing-agency-demo/marketing-agency-demo.component';
import { PersonalPortfolioDemoComponent } from './pages/personal-portfolio-demo/personal-portfolio-demo.component';
import { PortfolioAgencyDemoComponent } from './pages/portfolio-agency-demo/portfolio-agency-demo.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProjectsDetailsComponent } from './pages/projects-details/projects-details.component';
import { SaasStartupDemoComponent } from './pages/saas-startup-demo/saas-startup-demo.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { SoftwareStartupDemoComponent } from './pages/software-startup-demo/software-startup-demo.component';
import { StartupAgencyDemoComponent } from './pages/startup-agency-demo/startup-agency-demo.component';
import { StudioAgencyDemoComponent } from './pages/studio-agency-demo/studio-agency-demo.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
    {path: '', component: DigitalAgencyDemoComponent},
    {path: 'creative-agency', component: CreativeAgencyDemoComponent},
    {path: 'it-agency', component: ItAgencyDemoComponent},
    {path: 'marketing-agency', component: MarketingAgencyDemoComponent},
    {path: 'portfolio-agency', component: PortfolioAgencyDemoComponent},
    {path: 'studio-agency', component: StudioAgencyDemoComponent},
    {path: 'business-agency', component: BusinessAgencyDemoComponent},
    {path: 'startup-agency', component: StartupAgencyDemoComponent},
    {path: 'freelancer-portfolio', component: FreelancerPortfolioDemoComponent},
    {path: 'software-startup', component: SoftwareStartupDemoComponent},
    {path: 'digital-marketing', component: DigitalMarketingDemoComponent},
    {path: 'business-consulting', component: BusinessConsultingDemoComponent},
    {path: 'app-showcase', component: AppShowcaseDemoComponent},
    {path: 'personal-portfolio', component: PersonalPortfolioDemoComponent},
    {path: 'saas-startup', component: SaasStartupDemoComponent},
    {path: 'cyber-security-agency', component: CyberSecurityAgencyDemoComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }