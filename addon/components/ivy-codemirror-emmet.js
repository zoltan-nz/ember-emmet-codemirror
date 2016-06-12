import IvyCodeMirror from 'ivy-codemirror/components/ivy-codemirror';
import emmet from 'emmet';

export default IvyCodeMirror.extend({

  didInsertElement() {
    this._super(...arguments);
    console.log('emmet attached', this._codeMirror);
    emmet(this._codeMirror);
  }

});
