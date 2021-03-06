Collection0 = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.body.helpers({
    collection0: function () {
      return Collection0.findOne();
    },
  });
  Template.body.events({
    'click .increment': function () {
      /*
      Must act by ID since client side.
      this._id is explained at:
      http://stackoverflow.com/questions/22432690/what-is-this-id-in-meteors-leader-board-example
      */
      Collection0.update(this._id, {$inc: {x: 1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Collection0.find().count() === 0) {
      Collection0.insert({x:0});
    }
  });
}
