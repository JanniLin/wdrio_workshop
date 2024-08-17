const DashboardPage = require('./../po/pages/dashboard.page.js');
const DoctorsPage = require('./../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal to add new Doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Adding new Doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

    await $('[name="Name"]').setValue('John Joe');
    await $('#DoctorMobile').setValue('838383838383');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $('.e-footer-content button.e-primary').click();

    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Joe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
    await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();
    await doctorsPage.addDoctorModal.rootEl.$(` .e-dlg-closeicon-btn`).click();
    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
