const SideMenuComponent = require('./../components/common/sidemenu.component.js');
const BasePage = require('./base.page');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenuComponent();
  }
}

module.exports = DashboardPage;
