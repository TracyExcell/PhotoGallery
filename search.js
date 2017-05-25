

$(document).ready(function(){
  
    $("#search").keyup(function(){
        
        var current_query = $("#search").val();
        
        if(current_query != ""){
         $("#photo-container li").hide();
            
         $("#photo-container li ").each(function(){
           
             var current_keyword = $(this).attr("data-keywords");
            
            if (current_keyword.indexOf(current_query) >= 0){
                $(this).show();
            } 
              });
        } else {
                $("#photo-container li ").show();
            }
               
    });  
    
});