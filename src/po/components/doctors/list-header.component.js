const Basecomponent = require('./../common/base.component');

class ListHeaderComponent extends Basecomponent {
  constructor() {
    super('.specialization-types');
  }

  get addNewDoctorBtn() {
    return this.rootEl.$('button.e-control');
  }
}
module.exports = ListHeaderComponent;
