 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
     $('.loader').hide();

    var myFacebookToken = 'EAACEdEose0cBAAeZAVzA9shFbTitGz5SYV2EotduZBvZA5c2ac0dFKLYImQHPOfbV4jiwRFtBWvWZAIiZAR3CzsggIetjPyS2R9weg8GqhxBKyDTko16TkTG9MXwGGnOwyd503IDyFdDu15F08aTwZCJY7C6PP8GFOdHW0gdFTB4knlSJVtWkrynJtU7Ad4YsK4MAUFhJdLQZDZD';

    function getFacebookInfo(){

        $.ajax("https://graph.facebook.com/me?fields=id,name,hometown,gender,email,location,birthday,relationship_status,about&access_token="+myFacebookToken, 
        {

                success : function(response){

                    console.log(response);
                    console.log(typeof(response));
                     $("#myName").text("NAME:"+" "+response.name);
                      $("#myGender").text("GENDER:"+" "+response.gender);
                       $("#myBirthday").text("BIRTHDAY:"+" "+response.birthday);
                        $("#myHomeTown").text("HOMETOWN:"+" "+response.hometown.name);
                        $("#myRelationshipStatus").text("RELATIONSHIP_STATUS:"+" "+response.relationship_status);
                    $("#myEmail").text("E-MAIL:"+""+response.email);
                    $("#myProfileId").html('ProfileId: <a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                   

                },
                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert("Some Error occured");
                },
                
                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }//end argument list 



        );// end ajax call 
    

    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo);
    $("#facebookBtn").trigger("mouse-hover");


  });