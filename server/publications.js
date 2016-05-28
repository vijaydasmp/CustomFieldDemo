Meteor.publish('Meteor.users.userdetails', function ({ userIds }) {
  // Validate the arguments to be what we expect
  new SimpleSchema({
    userIds: { type: [String] }
  }).validate({ userIds });

  // Select only the users that match the array of IDs passed in
  const selector = {
    _id: { $in: userIds }
  };

  // Only return one field, `initials`
  const options = {
    fields: { name: 1, age :1, gender:1 }
  };

  return Meteor.users.find(selector, options);
});