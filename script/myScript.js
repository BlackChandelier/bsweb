/** Add smooth scrolling to all links in navbar + footer link**/
$(document).ready(function(){
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})

/**The elements are sliding in while scrolling**/
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

/**Shows and hides smoothly the details**/
$(document).ready(function(){
  $('.view-button').click(function() 
    { $(this).text(function(i,old){
        return old=='View details »' ?  'Hide details «' : 'View details »';
    });
  })
   $( '#myform' ).each(function(){
    this.reset();
    });
});
