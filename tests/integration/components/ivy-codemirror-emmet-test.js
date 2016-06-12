import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ivy-codemirror-emmet', 'Integration | Component | ivy codemirror emmet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ivy-codemirror-emmet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ivy-codemirror-emmet}}
      template block text
    {{/ivy-codemirror-emmet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
