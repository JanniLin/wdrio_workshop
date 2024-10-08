const BaseComponent = require('./base.component');

class SidemenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }
  get name() {
    return this.rootEl.$(' .name');
  }

  item(param) {
    const selectors = {
      dashboard: '[routerLink="/dashboard"]',
      schedule: '[routerLink="/calendar"]',
      doctors: '[routerLink="/doctors"]',
    };
    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}
module.exports = SidemenuComponent;
