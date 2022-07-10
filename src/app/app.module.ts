import { TabsModule } from 'ngx-tabset';
import { NgModule } from '@angular/core';
import { AccordionModule } from "ngx-accordion";
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalAgencyDemoComponent } from './pages/digital-agency-demo/digital-agency-demo.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { DaBannerComponent } from './pages/digital-agency-demo/da-banner/da-banner.component';
import { DaServicesComponent } from './pages/digital-agency-demo/da-services/da-services.component';
import { DaAboutComponent } from './pages/digital-agency-demo/da-about/da-about.component';
import { DaWorksComponent } from './pages/digital-agency-demo/da-works/da-works.component';
import { DaFeedbackComponent } from './pages/digital-agency-demo/da-feedback/da-feedback.component';
import { DaTeamComponent } from './pages/digital-agency-demo/da-team/da-team.component';
import { DaFunfactsComponent } from './pages/digital-agency-demo/da-funfacts/da-funfacts.component';
import { DaBlogComponent } from './pages/digital-agency-demo/da-blog/da-blog.component';
import { DaContactComponent } from './pages/digital-agency-demo/da-contact/da-contact.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CreativeAgencyDemoComponent } from './pages/creative-agency-demo/creative-agency-demo.component';
import { PartnerComponent } from './common/partner/partner.component';
import { CtaComponent } from './common/cta/cta.component';
import { CaBlogComponent } from './pages/creative-agency-demo/ca-blog/ca-blog.component';
import { CaTeamComponent } from './pages/creative-agency-demo/ca-team/ca-team.component';
import { WorkProcessComponent } from './common/work-process/work-process.component';
import { CaPricingComponent } from './pages/creative-agency-demo/ca-pricing/ca-pricing.component';
import { CaFeedbackComponent } from './pages/creative-agency-demo/ca-feedback/ca-feedback.component';
import { CaWorksComponent } from './pages/creative-agency-demo/ca-works/ca-works.component';
import { CaServicesComponent } from './pages/creative-agency-demo/ca-services/ca-services.component';
import { CaAboutComponent } from './pages/creative-agency-demo/ca-about/ca-about.component';
import { CaBannerComponent } from './pages/creative-agency-demo/ca-banner/ca-banner.component';
import { CaContactComponent } from './pages/creative-agency-demo/ca-contact/ca-contact.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ItAgencyDemoComponent } from './pages/it-agency-demo/it-agency-demo.component';
import { IaBannerComponent } from './pages/it-agency-demo/ia-banner/ia-banner.component';
import { IaServicesComponent } from './pages/it-agency-demo/ia-services/ia-services.component';
import { IaFeaturesComponent } from './pages/it-agency-demo/ia-features/ia-features.component';
import { IaWhyChooseUsComponent } from './pages/it-agency-demo/ia-why-choose-us/ia-why-choose-us.component';
import { FunfactsComponent } from './common/funfacts/funfacts.component';
import { IaFeedbackComponent } from './pages/it-agency-demo/ia-feedback/ia-feedback.component';
import { IaTeamComponent } from './pages/it-agency-demo/ia-team/ia-team.component';
import { IaPricingComponent } from './pages/it-agency-demo/ia-pricing/ia-pricing.component';
import { IaBlogComponent } from './pages/it-agency-demo/ia-blog/ia-blog.component';
import { IaContactComponent } from './pages/it-agency-demo/ia-contact/ia-contact.component';
import { MarketingAgencyDemoComponent } from './pages/marketing-agency-demo/marketing-agency-demo.component';
import { MaBannerComponent } from './pages/marketing-agency-demo/ma-banner/ma-banner.component';
import { MaServicesComponent } from './pages/marketing-agency-demo/ma-services/ma-services.component';
import { MaProjectsComponent } from './pages/marketing-agency-demo/ma-projects/ma-projects.component';
import { MaFeedbackComponent } from './pages/marketing-agency-demo/ma-feedback/ma-feedback.component';
import { MaAboutComponent } from './pages/marketing-agency-demo/ma-about/ma-about.component';
import { MaFunfactsComponent } from './pages/marketing-agency-demo/ma-funfacts/ma-funfacts.component';
import { MaCtaComponent } from './pages/marketing-agency-demo/ma-cta/ma-cta.component';
import { MaBlogComponent } from './pages/marketing-agency-demo/ma-blog/ma-blog.component';
import { MaContactComponent } from './pages/marketing-agency-demo/ma-contact/ma-contact.component';
import { PortfolioAgencyDemoComponent } from './pages/portfolio-agency-demo/portfolio-agency-demo.component';
import { PaBannerComponent } from './pages/portfolio-agency-demo/pa-banner/pa-banner.component';
import { PaProjectsComponent } from './pages/portfolio-agency-demo/pa-projects/pa-projects.component';
import { PaFunfactsComponent } from './pages/portfolio-agency-demo/pa-funfacts/pa-funfacts.component';
import { StudioAgencyDemoComponent } from './pages/studio-agency-demo/studio-agency-demo.component';
import { SaFeedbackComponent } from './pages/studio-agency-demo/sa-feedback/sa-feedback.component';
import { SaContactComponent } from './pages/studio-agency-demo/sa-contact/sa-contact.component';
import { SaBlogComponent } from './pages/studio-agency-demo/sa-blog/sa-blog.component';
import { SaAboutComponent } from './pages/studio-agency-demo/sa-about/sa-about.component';
import { InstagramComponent } from './common/instagram/instagram.component';
import { SaProjectsComponent } from './pages/studio-agency-demo/sa-projects/sa-projects.component';
import { SaBannerComponent } from './pages/studio-agency-demo/sa-banner/sa-banner.component';
import { SaServicesComponent } from './pages/studio-agency-demo/sa-services/sa-services.component';
import { BusinessAgencyDemoComponent } from './pages/business-agency-demo/business-agency-demo.component';
import { BaContactComponent } from './pages/business-agency-demo/ba-contact/ba-contact.component';
import { BaFeedbackComponent } from './pages/business-agency-demo/ba-feedback/ba-feedback.component';
import { BaTeamComponent } from './pages/business-agency-demo/ba-team/ba-team.component';
import { BaPricingComponent } from './pages/business-agency-demo/ba-pricing/ba-pricing.component';
import { BaWorksComponent } from './pages/business-agency-demo/ba-works/ba-works.component';
import { BaServicesComponent } from './pages/business-agency-demo/ba-services/ba-services.component';
import { BaBannerComponent } from './pages/business-agency-demo/ba-banner/ba-banner.component';
import { BaAboutComponent } from './pages/business-agency-demo/ba-about/ba-about.component';
import { StartupAgencyDemoComponent } from './pages/startup-agency-demo/startup-agency-demo.component';
import { StaBannerComponent } from './pages/startup-agency-demo/sta-banner/sta-banner.component';
import { StaFeaturedServicesComponent } from './pages/startup-agency-demo/sta-featured-services/sta-featured-services.component';
import { StaCaseStudiesComponent } from './pages/startup-agency-demo/sta-case-studies/sta-case-studies.component';
import { StaQuotesComponent } from './pages/startup-agency-demo/sta-quotes/sta-quotes.component';
import { StaAboutComponent } from './pages/startup-agency-demo/sta-about/sta-about.component';
import { StaTeamComponent } from './pages/startup-agency-demo/sta-team/sta-team.component';
import { StaPricingComponent } from './pages/startup-agency-demo/sta-pricing/sta-pricing.component';
import { StaContactComponent } from './pages/startup-agency-demo/sta-contact/sta-contact.component';
import { FreelancerPortfolioDemoComponent } from './pages/freelancer-portfolio-demo/freelancer-portfolio-demo.component';
import { FpBannerComponent } from './pages/freelancer-portfolio-demo/fp-banner/fp-banner.component';
import { FpMyProjectsComponent } from './pages/freelancer-portfolio-demo/fp-my-projects/fp-my-projects.component';
import { FpFeedbackComponent } from './pages/freelancer-portfolio-demo/fp-feedback/fp-feedback.component';
import { FpCtaComponent } from './pages/freelancer-portfolio-demo/fp-cta/fp-cta.component';
import { SoftwareStartupDemoComponent } from './pages/software-startup-demo/software-startup-demo.component';
import { SsBannerComponent } from './pages/software-startup-demo/ss-banner/ss-banner.component';
import { SsFeaturesComponent } from './pages/software-startup-demo/ss-features/ss-features.component';
import { SsAppDownloadComponent } from './pages/software-startup-demo/ss-app-download/ss-app-download.component';
import { SsFaqComponent } from './pages/software-startup-demo/ss-faq/ss-faq.component';
import { SsPricingComponent } from './pages/software-startup-demo/ss-pricing/ss-pricing.component';
import { SsFeedbackComponent } from './pages/software-startup-demo/ss-feedback/ss-feedback.component';
import { SsFunfactsVideoComponent } from './pages/software-startup-demo/ss-funfacts-video/ss-funfacts-video.component';
import { SsServicesComponent } from './pages/software-startup-demo/ss-services/ss-services.component';
import { SsPartnerComponent } from './pages/software-startup-demo/ss-partner/ss-partner.component';
import { SsScreenshotsComponent } from './pages/software-startup-demo/ss-screenshots/ss-screenshots.component';
import { DigitalMarketingDemoComponent } from './pages/digital-marketing-demo/digital-marketing-demo.component';
import { DmBannerComponent } from './pages/digital-marketing-demo/dm-banner/dm-banner.component';
import { DmContactComponent } from './pages/digital-marketing-demo/dm-contact/dm-contact.component';
import { DmWorkingProcessComponent } from './pages/digital-marketing-demo/dm-working-process/dm-working-process.component';
import { DmAboutComponent } from './pages/digital-marketing-demo/dm-about/dm-about.component';
import { DmServicesComponent } from './pages/digital-marketing-demo/dm-services/dm-services.component';
import { DmFunfactsComponent } from './pages/digital-marketing-demo/dm-funfacts/dm-funfacts.component';
import { DmCaseStudiesComponent } from './pages/digital-marketing-demo/dm-case-studies/dm-case-studies.component';
import { DmTestimonialsComponent } from './pages/digital-marketing-demo/dm-testimonials/dm-testimonials.component';
import { DmPricingComponent } from './pages/digital-marketing-demo/dm-pricing/dm-pricing.component';
import { DmTeamComponent } from './pages/digital-marketing-demo/dm-team/dm-team.component';
import { BusinessConsultingDemoComponent } from './pages/business-consulting-demo/business-consulting-demo.component';
import { BcBannerComponent } from './pages/business-consulting-demo/bc-banner/bc-banner.component';
import { BcFeaturesComponent } from './pages/business-consulting-demo/bc-features/bc-features.component';
import { BcAboutComponent } from './pages/business-consulting-demo/bc-about/bc-about.component';
import { BcServicesComponent } from './pages/business-consulting-demo/bc-services/bc-services.component';
import { BcFunfactsComponent } from './pages/business-consulting-demo/bc-funfacts/bc-funfacts.component';
import { BcWhatWeDoComponent } from './pages/business-consulting-demo/bc-what-we-do/bc-what-we-do.component';
import { BcTeamComponent } from './pages/business-consulting-demo/bc-team/bc-team.component';
import { BcPricingComponent } from './pages/business-consulting-demo/bc-pricing/bc-pricing.component';
import { BcCtaComponent } from './pages/business-consulting-demo/bc-cta/bc-cta.component';
import { BcBlogComponent } from './pages/business-consulting-demo/bc-blog/bc-blog.component';
import { BcPartnerComponent } from './pages/business-consulting-demo/bc-partner/bc-partner.component';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { AppShowcaseDemoComponent } from './pages/app-showcase-demo/app-showcase-demo.component';
import { AsBannerComponent } from './pages/app-showcase-demo/as-banner/as-banner.component';
import { AsPartnerComponent } from './pages/app-showcase-demo/as-partner/as-partner.component';
import { AsAboutComponent } from './pages/app-showcase-demo/as-about/as-about.component';
import { AsFunfactsComponent } from './pages/app-showcase-demo/as-funfacts/as-funfacts.component';
import { AsFeaturesComponent } from './pages/app-showcase-demo/as-features/as-features.component';
import { AsScreenshotsComponent } from './pages/app-showcase-demo/as-screenshots/as-screenshots.component';
import { AsAppDownloadComponent } from './pages/app-showcase-demo/as-app-download/as-app-download.component';
import { AsFeedbackComponent } from './pages/app-showcase-demo/as-feedback/as-feedback.component';
import { AsPricingComponent } from './pages/app-showcase-demo/as-pricing/as-pricing.component';
import { AsFaqComponent } from './pages/app-showcase-demo/as-faq/as-faq.component';
import { PersonalPortfolioDemoComponent } from './pages/personal-portfolio-demo/personal-portfolio-demo.component';
import { PpBannerComponent } from './pages/personal-portfolio-demo/pp-banner/pp-banner.component';
import { PpServicesComponent } from './pages/personal-portfolio-demo/pp-services/pp-services.component';
import { PpProjectsComponent } from './pages/personal-portfolio-demo/pp-projects/pp-projects.component';
import { PpSkillsComponent } from './pages/personal-portfolio-demo/pp-skills/pp-skills.component';
import { PpExperienceComponent } from './pages/personal-portfolio-demo/pp-experience/pp-experience.component';
import { PpTestimonialsComponent } from './pages/personal-portfolio-demo/pp-testimonials/pp-testimonials.component';
import { PpClientsComponent } from './pages/personal-portfolio-demo/pp-clients/pp-clients.component';
import { PpBlogComponent } from './pages/personal-portfolio-demo/pp-blog/pp-blog.component';
import { PpContactComponent } from './pages/personal-portfolio-demo/pp-contact/pp-contact.component';
import { SaasStartupDemoComponent } from './pages/saas-startup-demo/saas-startup-demo.component';
import { SssBannerComponent } from './pages/saas-startup-demo/sss-banner/sss-banner.component';
import { SssPartnerComponent } from './pages/saas-startup-demo/sss-partner/sss-partner.component';
import { SssAboutComponent } from './pages/saas-startup-demo/sss-about/sss-about.component';
import { SssServicesComponent } from './pages/saas-startup-demo/sss-services/sss-services.component';
import { SssHowItWorksComponent } from './pages/saas-startup-demo/sss-how-it-works/sss-how-it-works.component';
import { SssPricingComponent } from './pages/saas-startup-demo/sss-pricing/sss-pricing.component';
import { SssFeedbackComponent } from './pages/saas-startup-demo/sss-feedback/sss-feedback.component';
import { CyberSecurityAgencyDemoComponent } from './pages/cyber-security-agency-demo/cyber-security-agency-demo.component';
import { CsaBannerComponent } from './pages/cyber-security-agency-demo/csa-banner/csa-banner.component';
import { CsaFeaturesComponent } from './pages/cyber-security-agency-demo/csa-features/csa-features.component';
import { CsaServicesComponent } from './pages/cyber-security-agency-demo/csa-services/csa-services.component';
import { CsaAboutComponent } from './pages/cyber-security-agency-demo/csa-about/csa-about.component';
import { CsaWhyChooseUsComponent } from './pages/cyber-security-agency-demo/csa-why-choose-us/csa-why-choose-us.component';
import { CsaFunfactsComponent } from './pages/cyber-security-agency-demo/csa-funfacts/csa-funfacts.component';
import { CsaPartnerComponent } from './pages/cyber-security-agency-demo/csa-partner/csa-partner.component';
import { CsaTechnologyCompanyComponent } from './pages/cyber-security-agency-demo/csa-technology-company/csa-technology-company.component';
import { CsaFeedbackComponent } from './pages/cyber-security-agency-demo/csa-feedback/csa-feedback.component';
import { CsaCtaComponent } from './pages/cyber-security-agency-demo/csa-cta/csa-cta.component';
import { CsaContactComponent } from './pages/cyber-security-agency-demo/csa-contact/csa-contact.component';
import { ProjectsDetailsComponent } from './pages/projects-details/projects-details.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { FeaturesComponent } from './pages/studio-agency-demo/features/features.component';

@NgModule({
    declarations: [
        AppComponent,
        DigitalAgencyDemoComponent,
        NavbarComponent,
        DaBannerComponent,
        DaServicesComponent,
        DaAboutComponent,
        DaWorksComponent,
        DaFeedbackComponent,
        DaTeamComponent,
        DaFunfactsComponent,
        DaBlogComponent,
        DaContactComponent,
        FooterComponent,
        CreativeAgencyDemoComponent,
        PartnerComponent,
        CtaComponent,
        CaBlogComponent,
        CaTeamComponent,
        WorkProcessComponent,
        CaPricingComponent,
        CaFeedbackComponent,
        CaWorksComponent,
        CaServicesComponent,
        CaAboutComponent,
        CaBannerComponent,
        CaContactComponent,
        NotFoundComponent,
        ItAgencyDemoComponent,
        IaBannerComponent,
        IaServicesComponent,
        IaFeaturesComponent,
        FeaturesComponent,
        IaWhyChooseUsComponent,
        FunfactsComponent,
        IaFeedbackComponent,
        IaTeamComponent,
        IaPricingComponent,
        IaBlogComponent,
        IaContactComponent,
        MarketingAgencyDemoComponent,
        MaBannerComponent,
        MaServicesComponent,
        MaProjectsComponent,
        MaFeedbackComponent,
        MaAboutComponent,
        MaFunfactsComponent,
        MaCtaComponent,
        MaBlogComponent,
        MaContactComponent,
        PortfolioAgencyDemoComponent,
        PaBannerComponent,
        PaProjectsComponent,
        PaFunfactsComponent,
        StudioAgencyDemoComponent,
        SaFeedbackComponent,
        SaContactComponent,
        SaBlogComponent,
        SaAboutComponent,
        InstagramComponent,
        SaProjectsComponent,
        SaBannerComponent,
        SaServicesComponent,
        BusinessAgencyDemoComponent,
        BaContactComponent,
        BaFeedbackComponent,
        BaTeamComponent,
        BaPricingComponent,
        BaWorksComponent,
        BaServicesComponent,
        BaBannerComponent,
        BaAboutComponent,
        StartupAgencyDemoComponent,
        StaBannerComponent,
        StaFeaturedServicesComponent,
        StaCaseStudiesComponent,
        StaQuotesComponent,
        StaAboutComponent,
        StaTeamComponent,
        StaPricingComponent,
        StaContactComponent,
        FreelancerPortfolioDemoComponent,
        FpBannerComponent,
        FpMyProjectsComponent,
        FpFeedbackComponent,
        FpCtaComponent,
        SoftwareStartupDemoComponent,
        SsBannerComponent,
        SsFeaturesComponent,
        SsAppDownloadComponent,
        SsFaqComponent,
        SsPricingComponent,
        SsFeedbackComponent,
        SsFunfactsVideoComponent,
        SsServicesComponent,
        SsPartnerComponent,
        SsScreenshotsComponent,
        DigitalMarketingDemoComponent,
        DmBannerComponent,
        DmContactComponent,
        DmWorkingProcessComponent,
        DmAboutComponent,
        DmServicesComponent,
        DmFunfactsComponent,
        DmCaseStudiesComponent,
        DmTestimonialsComponent,
        DmPricingComponent,
        DmTeamComponent,
        BusinessConsultingDemoComponent,
        BcBannerComponent,
        BcFeaturesComponent,
        BcAboutComponent,
        BcServicesComponent,
        BcFunfactsComponent,
        BcWhatWeDoComponent,
        BcTeamComponent,
        BcPricingComponent,
        BcCtaComponent,
        BcBlogComponent,
        BcPartnerComponent,
        SubscribeComponent,
        AppShowcaseDemoComponent,
        AsBannerComponent,
        AsPartnerComponent,
        AsAboutComponent,
        AsFunfactsComponent,
        AsFeaturesComponent,
        AsScreenshotsComponent,
        AsAppDownloadComponent,
        AsFeedbackComponent,
        AsPricingComponent,
        AsFaqComponent,
        PersonalPortfolioDemoComponent,
        PpBannerComponent,
        PpServicesComponent,
        PpProjectsComponent,
        PpSkillsComponent,
        PpExperienceComponent,
        PpTestimonialsComponent,
        PpClientsComponent,
        PpBlogComponent,
        PpContactComponent,
        SaasStartupDemoComponent,
        SssBannerComponent,
        SssPartnerComponent,
        SssAboutComponent,
        SssServicesComponent,
        SssHowItWorksComponent,
        SssPricingComponent,
        SssFeedbackComponent,
        CyberSecurityAgencyDemoComponent,
        CsaBannerComponent,
        CsaFeaturesComponent,
        CsaServicesComponent,
        CsaAboutComponent,
        CsaWhyChooseUsComponent,
        CsaFunfactsComponent,
        CsaPartnerComponent,
        CsaTechnologyCompanyComponent,
        CsaFeedbackComponent,
        CsaCtaComponent,
        CsaContactComponent,
        ProjectsDetailsComponent,
        ServicesDetailsComponent,
        BlogDetailsComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        StickyNavModule,
        NgxSmartModalModule.forRoot(),
        NgxScrollTopModule,
        TabsModule.forRoot(),
        AccordionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
