const { pages } = require('./../po');

describe('Doctors page', () => {
  beforeEach(async () => {
    await pages('dashboard').open();
  });

  it('Check page title', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal to add new Doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Adding new Doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

    await pages('doctors').addDoctorModal.input('name').setValue('John Joe');
    await pages('doctors').addDoctorModal.input('phone').setValue('838383838383');
    await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
    await pages('doctors').addDoctorModal.input('education').setValue('Basic');
    await pages('doctors').addDoctorModal.input('designation').setValue('Test');

    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. John Joe');
    await expect(pages('doctors').specialistCard(8).education).toHaveText('Basic', { ignoreCase: true });
  });

  it('Close a modal window for adding new doctor', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
    await pages('doctors').addDoctorModal.closeBtn.click();
    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
