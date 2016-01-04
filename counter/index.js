if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    // TODO is click button magic?
    'click button': function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
