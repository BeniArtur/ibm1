import{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { VoteComponent } from './vote/vote.component';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'vote',
component:VoteComponent
},
{path:'dashboard',
component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    VoteComponent,

  ],
 
  imports: [
     BrowserModule,
     RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatRadioModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

