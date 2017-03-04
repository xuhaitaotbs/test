import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Dispatcher } from "../core/Dispatcher";
import { HttpService } from "../core/HttpService";
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ChecklistComponent } from '../pages/checklist/checklist';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ChecklistComponent,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ChecklistComponent,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Dispatcher, HttpService]
})
export class AppModule {}