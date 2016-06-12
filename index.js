/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-emmet-codemirror',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/emmet.js');
    app.import('vendor/shims/emmet.js');
  }
};
