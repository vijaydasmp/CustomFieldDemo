# CustomFieldDemo
A Demo of Custom data about users , from http://guide.meteor.com/accounts.html#custom-user-data
I am following below advice from Meteor user guide 
The best way to store your custom data onto the Meteor.users collection is to add a new uniquely-named top-level field on the user document.
For example, if you wanted to add a mailing address to a user, you could do it like this:

Steps to Reproduce the issue
1) Clone this repo  <br>
2) Start the project usual <br>
3) Create account and login <br>
4) After login a form will appear , add name,age,gender and click save <br>
5) After clicking "Save", look for new top level field name "detail" in Meteor.user Document, As per Meteor guide a new top level <br>
   field should have been added , but it doesn't appear so in the Javascript console or on the server log

