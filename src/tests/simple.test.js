describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
  })

  it('Check page title', async () => {
   await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
  })

  it('Open modal to add new Doctor', async () => {
    await $("div[routerLink='/doctors']").click();
    await $('.specialization-types button.e-control').click()
    await expect($('.new-doctor-dialog')).toBeDisplayed()

  })

  it('Adding new Doctor', async  () => {
    await $("div[routerLink='/doctors']").click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();

    await $('[name="Name"]').setValue('John Joe');
    await $('#DoctorMobile').setValue('838383838383');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $('.e-footer-content button.e-primary').click();

    await expect($('.new-doctor-dialog')).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Joe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic',{ignoreCase: true});
  });

  it('close a modal window for adding new doctor', async () => {
    await $("div[routerLink='/doctors']").click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();
    await $(`.new-doctor-dialog .e-dlg-closeicon-btn`).click();
    await expect($('.new-doctor-dialog')).not.toBeDisplayed()

  });

})