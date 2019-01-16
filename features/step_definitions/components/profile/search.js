const { Given, When, Then, setDefaultTimeout, slee } = require('cucumber');
const { expect } = require('chai')
const LinkedinPage = require('../../../pages/linkedin');

When(/^I search a profile of "([^"]*)" on Linkedin$/, async function(name) {
    await testController.typeText(LinkedinPage.linkedin.profile.searchButton(), name);
});

When(/^I select the first user on list$/, async function() {
    const elem = LinkedinPage.linkedin.profile.firstLinkSearch();
    await testController.click(elem)
});

Then(/^I should not see results$/, async function() {
    const elem = await LinkedinPage.linkedin.search.error();
    expect(elem).to.not.undefined;
});

Then(/^I should see a profile$/, async function() {
    const elem = await LinkedinPage.linkedin.profile.myTitle();
    expect(elem).to.not.undefined;
});





