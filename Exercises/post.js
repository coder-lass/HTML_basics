$(document).ready(function(){
  $.ajax({
      type : "GET",
      url : "https://jsonplaceholder.typicode.com/posts",
    //   dataType: 'json',
      success : function(response) {
          console.log(response);
          $.each(response, function(key, value) {
            $('body').append($('<div>', {
                text: "ID : " + JSON.stringify(value.id)
            }));
            $('body').append($('<div>', {
                text: "userID : " + JSON.stringify(value.userId)
            }));
            $('body').append($('<div>', {
                text: "title : " + JSON.stringify(value.title) 
            }));
            $('body').append($('<br>'));
            
        });
        //   $("#p1").html(JSON.stringify(response));
      }
  });
});