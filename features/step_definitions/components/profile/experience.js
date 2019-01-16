const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai')
const LinkedinPage = require('../../../pages/linkedin');

setDefaultTimeout(60 * 1000);

When(/^I go to my profile on Linkedin$/, async function() {
    const elem = LinkedinPage.linkedin.profile.mine();
    await testController.click(elem)
});

When(/^I click in more experience on Linkedin$/, async function() {
    const elem = LinkedinPage.linkedin.profile.buttonSection();
    await testController.click(elem)
});

When(/^I click in more position on Linkedin$/, async function() {
    const elem = LinkedinPage.linkedin.profile.moreExperience();
    await testController.click(elem)
});


When(/^I fill position title "([^"]*)", company "([^"]*)", month "([^"]*)", year "([^"]*)", position headline "([^"]*)"$/, async function(postion, company, month, year,positionHeadline) {
    await testController.typeText(LinkedinPage.linkedin.profile.position(), postion);
    await testController.typeText(LinkedinPage.linkedin.profile.company(), company); 

    const monthSelect = LinkedinPage.linkedin.profile.month();
    const monthOption = monthSelect.find('option').with({ boundTestRun: testController });

    await testController
        .click(monthSelect)
        .click(monthOption.withText(month));


    const yearSelect = LinkedinPage.linkedin.profile.year();
    const yearOption = yearSelect.find('option').with({ boundTestRun: testController });

    await testController
        .click(yearSelect)
        .click(yearOption.withText(year));

    await testController.typeText(LinkedinPage.linkedin.profile.positionHeadline(), positionHeadline); 
    
    const elem = LinkedinPage.linkedin.profile.share()
    await testController.click(elem)
});

When(/^I click save my experience on Linkedin$/, async function() {
    const elem = LinkedinPage.linkedin.profile.save();
    await testController.click(elem)
});


Then(/^I should see a id error "([^"]*)"$/, async function(id) {
    const selector = await LinkedinPage.linkedin.profile.error(id);
    expect(selector).to.not.undefined;
});

Then(/^I should see a new experience "([^"]*)"$/, async function(text) {
    await testController.expect(LinkedinPage.linkedin.profile.myTitle().innerText).contains(text);
});



