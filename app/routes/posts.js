import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    }
  }
});