import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import getNode from 'real-chat/tests/helpers/integration/get-node';
import bindTestSelectors from 'real-chat/tests/helpers/bind-test-selectors';

const SELECTORS = {
  title: '[data-test-selector="form-card__title"]',
  submitButton: '[data-test-selector="form-card__submit-button"]'
};


let actual, expected;

moduleForComponent('form-card', 'Integration | Component | form card', {
  integration: true,
  beforeEach() {
    bindTestSelectors();
  }
});

test('Rendering with a title heading and submit button', function(assert) {

  const title = 'Presidential Election';
  const buttonText = 'Vote';

  this.set('title', title);
  this.set('buttonText', buttonText);

  this.render(hbs`
    {{form-card
      title=title
      buttonText=buttonText
      onSubmit=onSubmit
    }}
  `);

  actual = getNode(this)
    .querySelector(SELECTORS.submitButton)
    .textContent
    .trim();
  expected = buttonText;

  assert.equal(actual, expected);


  actual = getNode(this)
    .querySelector(SELECTORS.title)
    .textContent
    .trim();

  expected = title;

  assert.equal(actual, expected);
});


test('Calling its onSubmit action when the submit button is pressed', function(assert) {
  assert.expect(1);

  this.set('onSubmit', () => {
    assert.ok(true, 'Submit action fired');
  });

  this.render(hbs`
    {{form-card onSubmit=onSubmit}}
  `);

  getNode(this).querySelector(SELECTORS.submitButton).click();
});
