/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
// These are Chimp globals
/* globals browser assert server */

// function countLists() {
//   browser.waitForExist('.list-todo');
//   const elements = browser.elements('.list-todo');
//   return elements.value.length;
// };


describe('all tests', function () {

  beforeEach(function () {
    browser.url('http://localhost:3000');
    // server.call('generateFixtures');
  });

  it('shows the correct title @watch', function () {
    // browser.click('.js-new-list');
    // assert.equal(countLists(), initialCount + 1);

    assert.equal(browser.getTitle(), "What TODO?");


  });

  it('directs you to create task @watch', () => {
    browser.click('.nav-create-task');
    assert.equal(browser.isVisible('.page_create_task'), true);
  });

});