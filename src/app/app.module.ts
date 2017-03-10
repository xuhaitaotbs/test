import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Dispatcher } from "../core/Dispatcher";
import { HttpService } from "../core/HttpService";
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ChecklistMenuComponent } from '../pages/checklist/checklistmenu/checklistmenu';
import { ChecklistComponent } from '../pages/checklist/checklist/checklist';
import { ChecklistDetailComponent } from '../pages/checklist/checklistdetail/checklistdetail';
import { ChecklistConfirmComponent } from '../pages/checklist/checklistconfirm/checklistconfirm';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { BarChartDemoComponent } from '../pages/chartjs/bar-chart-demo';
import { BaseChartDemoComponent } from '../pages/chartjs/base-chart-demo';
import { DoughnutChartDemoComponent } from '../pages/chartjs/doughnut-chart-demo';
import { LineChartDemoComponent } from '../pages/chartjs/line-chart-demo';
import { PieChartDemoComponent } from '../pages/chartjs/pie-chart-demo';
import { PolarAreaChartDemoComponent } from '../pages/chartjs/polar-area-chart-demo';
import { RadarChartDemoComponent } from '../pages/chartjs/radar-chart-demo';

import { LoginComponent } from '../pages/login/login';
import { ProfileComponent } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ChecklistMenuComponent,
    ChecklistComponent,
    ChecklistDetailComponent,
    ChecklistConfirmComponent,
    HomePage,
    TabsPage,
    BarChartDemoComponent,//chartJS
    BaseChartDemoComponent,//chartJS
    DoughnutChartDemoComponent,//chartJS
    LineChartDemoComponent,//chartJS
    PieChartDemoComponent,//chartJS
    PolarAreaChartDemoComponent,//chartJS
    RadarChartDemoComponent,//chartJS
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ChecklistMenuComponent,
    ChecklistComponent,
    ChecklistDetailComponent,
    ChecklistConfirmComponent,
    HomePage,
    TabsPage,
    BarChartDemoComponent,//chartJS
    BaseChartDemoComponent,//chartJS
    DoughnutChartDemoComponent,//chartJS
    LineChartDemoComponent,//chartJS
    PieChartDemoComponent,//chartJS
    PolarAreaChartDemoComponent,//chartJS
    RadarChartDemoComponent,//chartJS
    LoginComponent,
    ProfileComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Dispatcher, HttpService]
})
export class AppModule {}