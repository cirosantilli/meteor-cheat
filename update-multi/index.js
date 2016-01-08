Collection0 = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.body.helpers({
    collection0: function () {
      return Collection0.findOne();
    },
  });
  Template.body.events({
    'click .increment': function () {
      Collection0.update({}, {$inc: {x:1}}, {multi:true});
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
