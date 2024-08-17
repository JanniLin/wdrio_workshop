const DashBoardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');

/**
 *
 * @param name {'dashboard' / 'doctors'}
 * @returns {DoctorsPage / DoctorsPage}
 */
function pages(name) {
  const items = {
    dashboard: new DashBoardPage(),
    doctors: new DoctorsPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DoctorsPage,
  DashBoardPage,
  pages,
};