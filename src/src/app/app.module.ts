import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**
 * Services
 */
import { UnitService } from '../providers/unit-service';

/**
 * Pages
 */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UnitListPage } from '../pages/unit-list/unit-list';
import { UnitDetailPage } from '../pages/unit-detail/unit-detail';
import { UnitCreatePage } from '../pages/unit-create/unit-create';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UnitListPage,
    UnitDetailPage,
    UnitCreatePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UnitListPage,
    UnitDetailPage,
    UnitCreatePage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UnitService,
  ]
})
export class AppModule {}
