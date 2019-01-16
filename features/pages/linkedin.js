const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.linkedin = {
    url: function() {
        return 'https://www.linkedin.com';
    },
    login: {
        email: function() {
            return select('#login-email').nth(0).with({boundTestRun: testController})
        },
        password: function() {
          return select('#login-password').nth(0).with({boundTestRun: testController})
        },
        forgot: function() {
            return Selector('.link-forgot-password');
        },
        error: function(id) {
            return Selector('#'+id).nth(0).with({boundTestRun: testController});
        },
        success: function() {
          return Selector('#feed-tab-icon');
        }
    },
    search: {
      error: function() {
        return Selector('.search-no-results__image-container').nth(0).with({ boundTestRun: testController });
      }
    },
    profile: {
      searchButton: function() {
        return select('#nav-search-artdeco-typeahead > .ember-view > input');
      },
      firstSearchResult: function() {
        return Selector('.search-result__result-link').nth(0);
      },
      firstLinkSearch: function() {
        return Selector('.search-result__result-link .ember-view').nth(0).with({ boundTestRun: testController });
      },
      mine: function() {
        return Selector('.profile-rail-card__actor-link').nth(0).with({ boundTestRun: testController });
      },
      buttonSection: function() {
        return Selector('.pe-hub-section__expand-button').nth(0).with({ boundTestRun: testController });
        
      },
      moreExperience: function() {
        return Selector('.pe-hub-drawer__link .ember-view').nth(0).with({ boundTestRun: testController });
      },
      position: function() {
        return select('#position-title-typeahead').nth(0).with({ boundTestRun: testController });
      },
      company: function() {
        return select('#position-company-typeahead').nth(0).with({ boundTestRun: testController });
      },
      month: function() {
        return select('#position-start-month').with({ boundTestRun: testController });

      },
      year: function() {
        return select('#position-start-year').with({ boundTestRun: testController });
      },
      positionHeadline: function() {
        return select('#position-headline').nth(0).with({ boundTestRun: testController });
      },
      share: function() {
        return select('#osmosis-toggle-switch').nth(0).with({ boundTestRun: testController });
      },
      save: function() {
        return select('.pe-form-footer__actions > .pe-form-footer__action--submit').nth(0).with({ boundTestRun: testController });
      },
      error: function(id) {
        return Selector('#'+id).nth(0).with({boundTestRun: testController});
      },
      myTitle: function() {
        return Selector('.pv-top-card-section__headline').nth(0).with({boundTestRun: testController});
      }
    }
};
