      // $('#lnk-interest').on('click', function (event) {
      //   event.preventDefault();
      //   event.stopPropagation();
      //   event.cancelBubble = true;

      //   $('#home').hide();
      //   $('#contact').hide();
      //   $('#portfolio').hide();
      //   $('#interest').removeClass('hidden');
      //   $('#interest').fadeIn(3000);
      // });


$(function(){
      var content = $('#content'); 
      content .find('section:not(.active)').hide()
      $('.navbar-nav a').click(function(){  
        var $this = $(this)
        , selector    = $this.attr('href')
        , activated   = content.find(selector)
        , active      = activated.siblings('.active')
        , selected    = $('.navbar-nav a.selected')

        $this.addClass('selected')
        selected.removeClass('selected')

        active.fadeOut(function(){
          active.removeClass('active')
          activated.addClass('active').fadeIn(2000)
          $.scrollTo(activated, 750);
        })
         $(".navbar-header .navbar-toggle").trigger( "click" );
       })
    })