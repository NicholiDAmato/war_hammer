import { Component } from '@angular/core';

import { UnitListPage } from '../unit-list/unit-list';
import { UnitCreatePage } from '../unit-create/unit-create';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = UnitListPage;
  tab2Root: any = UnitCreatePage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
