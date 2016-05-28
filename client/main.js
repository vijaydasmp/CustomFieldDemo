import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(() => {
  Meteor.subscribe('Meteor.users.userdetails',Meteor.userId());
});