  //= require modernizr-2.5.3.min
  //= require stretch

  ~ ( function ( $ ) {

    $(document).ready( function ( ) {

      //$('figcaption').on('click', function ( ) {  });

      var
        orientationChange = 'onorientationchange' in window,
        orientationEvent = orientationChange ? 'orientationchange' : 'resize',
        header = $('body > header'),
        content = $('body > div li'),
        footer = $('.comp'),
        space = header.height() + parseInt( header.css('margin-bottom') ) + header.position().top + parseInt( footer.css('border-top-width') ) + parseInt( footer.css('padding-top') ),      
        getSpace = function ( o ) {
          return o === 90 || o === -90 ? 150 : 320;
        }
      ;

      $(content).css({ 'height' : document.height - space, 'padding-top' : ( document.height - space ) >> 2 });

      window.addEventListener(orientationEvent, function ( ) {
        if ( orientationChange ) space = getSpace( window.orientation );
        $(content).css({ 'height' : document.height - space, 'padding-top' : ( document.height - space ) >> 2 });
      });

    });

  } ) ( jQuery );