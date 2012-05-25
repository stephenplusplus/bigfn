  //= require modernizr-2.5.3.min
  //= require stretch

  ~ ( function ( $ ) {
    
    window.addEventListener( 'deviceorientation', function ( e ) {
      var a = e.alpha;
      var b = e.beta;
      var g = e.gamma;
      alert('changed?');
    }, false);

    $(document).ready( function ( ) {

    });

  } ) ( jQuery );