
  ~ ( function ( ) {

    Object.prototype.stretch = ( function ( o ) {

      if ( typeof o !== 'object' ) return;
      
      var
        funk      = function () {},
        stretches = o['is-a'] || o['is-an'],
        passes    = o['pass'],
        has       = o['has'],
        does      = o['does']
      ;

      if ( stretches ) {
        funk.prototype = new stretches.constructor;
        funk.prototype.constructor = funk;
      }
      
      if ( passes )
        funk.prototype.stage( passes );

      for ( var is in has )
        funk.prototype[is] = has[is];

      for ( var func in does ) {
        if ( func === '_' ) continue;
        funk.prototype[func] = does[func];
      }

      return new funk;

    } ) ( );

  } ) ( );
