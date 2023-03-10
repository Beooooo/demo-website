;( function( $, window, document, undefined ) {
  "use strict";

  // Create the defaults once
  var infiniteScroller = "infiniteScroller",
  defaults = {
    maxSpeed: 3,
    speed: 1,
    scrollOnMouseOver: true,
    resetOnMouseOut: false,
    direction: "left"
  };

  // The actual plugin constructor
  function Plugin( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this.controller = { currentSpeed: 2 };
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend( Plugin.prototype, {
    init: function() {
      var settings = this.settings;
      var $scroller = $( this.element );
      $scroller.wrapInner( "<div class='slide-wrap'><div class='slide-data' /></div>" );
      var $data = $scroller.find( ".slide-data" );
      var $slideWrap = $scroller.find( ".slide-wrap" );
      var scrollerContent = $data.children( "ul" );
      var controller = this.controller;
      var speed = settings.speed;
      $scroller.addClass( "slide-pane" );

      // Set height of the container
      var maxHeight = 0;
      scrollerContent.children().each( function() {
        if ( $( this ).height() > maxHeight ) {
          maxHeight = $( this ).height();
        }
      } );
      $slideWrap.height( maxHeight );

      // Clone the scroller content
      scrollerContent.children().clone().appendTo( scrollerContent );

      // Shift the elements to the right
      var currentX = 0;
      scrollerContent.children().each( function() {
        var $this = $( this );
        $this.css( "left", currentX );
        currentX += $this.outerWidth( true );
      } );
      var fullWidth = currentX / 2;
      var viewportWidth = $data.width();

      var rafReference;
      
      // Scrolling management; start the automatical scrolling
      var doScroll = function() {
        var currentX = $data.scrollLeft();
        var newX = currentX + controller.currentSpeed;
        if ( newX > fullWidth * 2 - viewportWidth ) {
          newX -= fullWidth;
        } else if ( newX < 0 ) {
          newX += fullWidth;
        }
        $data.scrollLeft( newX );

        rafReference = requestAnimationFrame(doScroll)
      };

      requestAnimationFrame( doScroll );
      this.tweenToNewSpeed( speed );

      if ( settings.scrollOnMouseOver ) {
        this.scrollOnMouseOver( $data );
      }

      $scroller.css( "visibility", "visible" );
    },
    tweenToNewSpeed: function( newSpeed, duration ) {
      if ( duration === undefined ) {
        duration = 0;
      }
      var $controller = $( this.controller );
      $controller.stop( true ).animate( { currentSpeed: newSpeed }, duration );
    },
    scrollOnMouseOver: function( $data ) {
      var settings = this.settings;
      var $this = this;

      // Adjust speed on mouse move
      $data.mousemove( function( event ) {
        var deviceWidth = $( window ).width();
        var halfDeviceWidth = deviceWidth / 2;
        var horizonalPos = event.pageX;
        var percentage = 0;
        var duration = settings.maxSpeed;
        var newDuration = 4;


        if ( horizonalPos < halfDeviceWidth ) {
          percentage = -( 100 - ( ( horizonalPos / halfDeviceWidth ) * 100 )
                .toFixed( 2 ) );
          // console.log('left');
        } else {
          percentage = ( ( ( horizonalPos - halfDeviceWidth ) / halfDeviceWidth ) * 100 )
                .toFixed( 2 );
          // console.log('right');

        }

        duration = ( percentage / 100 ) * duration;
        newDuration = ( percentage / 100 ) * newDuration;


        if ( horizonalPos < halfDeviceWidth ) {
          $this.tweenToNewSpeed( duration );
        } else {
          $this.tweenToNewSpeed( newDuration );
        }
        
      } );
    }
  } );

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ infiniteScroller ] = function( options ) {
    return this.each( function() {
      if ( !$.data( this, "plugin_" + infiniteScroller ) ) {
        $.data( this, "plugin_" +
        infiniteScroller, new Plugin( this, options ) );
      }
    } );
  };

} )( jQuery, window, document );