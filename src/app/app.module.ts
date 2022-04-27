import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SupportComponent } from './support/support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { OrganisationComponent } from './organisation/organisation.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AgbComponent } from './agb/agb.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SupportComponent,
    PageNotFoundComponent,
    OrganisationComponent,
    DownloadsComponent,
    NewsComponent,
    ContactComponent,
    AgbComponent,
    ImpressumComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'organisation', component: OrganisationComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'downloads', component: DownloadsComponent},
      {path: 'news', component: NewsComponent},
      {path: 'support', component: SupportComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
