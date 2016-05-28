Template.userDetail.events({
  
    'click #save': function (events) {
        event.preventDefault();
        console.log("Saving User Details of "+ $('#name').val());
        var gender = 'male';
        if ($("#female").is(":checked")) {
            gender = 'female';
        }
        const newDetail = {
            name:$('#name').val(),
            age:$('#age').val(),
            sex:gender
        }
        
        Meteor.call('adduserinfo',newDetail);
        
        console.log("Saved User Details of "+ $('#name').val());
        console.log(Meteor.user());
    }
});