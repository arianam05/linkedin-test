const { Given, When, Then } = require('cucumber');
const { expect } = require('chai')
const LinkedinPage = require('../../pages/linkedin');

Given(/^I open the Linkedin page$/, async function() {
    await testController.navigateTo(LinkedinPage.linkedin.url());
});

When(/^I am typing my login "([^"]*)" and password "([^"]*)" on Linkedin$/, async function(email, password) {
    await testController.typeText(LinkedinPage.linkedin.login.email(), email);
    await testController.typeText(LinkedinPage.linkedin.login.password(), password); 
});

When(/^I am pressing (.*) key on Linkedin$/, async function(text) {
    await testController.pressKey(text);
});

Then(/^I should see a id error "([^"]*)" on Linkedin as "([^"]*)"$/, async function(id, text) {
    await testController.expect(LinkedinPage.linkedin.login.error(id).innerText).contains(text);
});

Then(/^I should see a error that on Linkedin as "([^"]*)"$/, async function(text) {
    await testController.expect(LinkedinPage.linkedin.login.error('error-for-password').innerText).contains(text);
});

Then(/^I should be inside linkedin$/, async function(text) {
    const success = await LinkedinPage.linkedin.login.success();
    expect(success).to.not.undefined;
});

Then(/^I should be in the login of Linkedin$/, async function() {
    const success = await LinkedinPage.linkedin.login.forgot();
    expect(success).to.not.undefined;
});


