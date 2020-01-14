$(document).ready(function() {

  $("button#hello").click(function() {
    $(".eng").prepend("<li>Hello!</li>");
    $(".ukr").prepend("<li>Dobrogo Dnya!</li>");
    $(".fr").prepend("<li>Bonjour!</li>");
    $(".sp").prepend("<li>Hola!</li>");
    $('li').css('background-color', 'grey');  
    $(".eng").children("li").first().click(function() {
      $(this).remove();
    });
    $(".ukr").children("li").first().click(function() {
      $(this).remove();
    });  
    $(".fr").children("li").first().click(function() {
      $(this).remove();
    });    
    $(".sp").children("li").first().click(function() {
      $(this).remove();  
    });
  });
   
  $("button#goodbye").click(function() {
    $(".eng").prepend("<li>Goodbye!</li>");
    $(".ukr").prepend("<li>Usyogo naykrashchogo!</li>");
    $(".fr").prepend("<li>Au revoir!</li>");
    $(".sp").prepend("<li>!Adios!</li>");
    $('li').css('background-color', 'yellow'); 
    $(".eng").children("li").first().click(function() {
      $(this).remove();
    });
    $(".ukr").children("li").first().click(function() {
      $(this).remove();
    });  
    $(".fr").children("li").first().click(function() {
      $(this).remove();
    });    
    $(".sp").children("li").first().click(function() {
      $(this).remove();    
    });
  });
 
          
  $("button#howdy").click(function() {
    $(".eng").prepend("<li>How are you doing?</li>");
    $(".ukr").prepend("<li>Yak vashy spravy?</li>");
    $(".fr").prepend("<li>Comment allez vous?</li>");
    $(".sp").prepend("<li>?Como estas?</li>");
    $('li').css('background-color', 'green');   
    $(".eng").children("li").first().click(function() {
      $(this).remove();
    });
    $(".ukr").children("li").first().click(function() {
      $(this).remove();
    });  
    $(".fr").children("li").first().click(function() {
      $(this).remove();
    });    
    $(".sp").children("li").first().click(function() {
      $(this).remove();
    });          
  });
});
//   $("button#goodbye").click(function() {
//     $(".user").prepend("<li>Goodbye!</li>");
//     $(".webpage").prepend("<li>Goodbye, dear user!</li>");
//     //$('li').css('background-color', 'green');
//   });

//   $("button#stop").click(function() {
//     $(".user").prepend("<li>Stop copying me!</li>");
//     $(".webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//     //$('li').css('background-color', 'green');
//   });
//  });