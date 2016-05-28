Meteor.methods({
       'adduserinfo': function (newDetail) {
        debugger;
        console.log("Updating Info ..."+newDetail.name+"  "+newDetail.age+" "+Meteor.userId()) ;
        
        Meteor.users.update(Meteor.userId() ,{
            $set: {
                detail: newDetail
            }              
        });
        console.log("After Updating"+Meteor.user().newDetail+"OK Check");
    },
    'testmethod':  function(params){
        console.log("Helloooooooooooooooo  "+params);
    }
});