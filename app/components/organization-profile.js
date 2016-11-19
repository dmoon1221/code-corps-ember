import Ember from 'ember';

const {
  Component,
  computed: { mapBy },
  inject: { service }
} = Ember;

export default Component.extend({
  classNames: ['organization-profile'],

  credentials: service(),

  didReceiveAttrs() {
    this._super(...arguments);
    this.get('credentials').set('currentOrganization', this.get('organization'));
  }
});
