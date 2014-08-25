
//draw logo
var pathObj = {
    "intro-logo": {
        "strokepath": [
            {
                "path": "M   L  ",
                "duration": 500
            },
            {
                "path": "M 186.675 96.9011 q -12 56 7 67 q 45 12 47 -64",
                "duration": 500
            },
            {
                "path": "M 321 108 a 29.5477 29.5477 0 1 0 3 45",
                "duration": 500
            },
            {
                "path": "M 371 101 l -15 58 l 40 -1",
                "duration": 500
            },
            {
                "path": "M 459 103 l -27 61.9253",
                "duration": 500
            },
            {
                "path": "M 459 104 l 27.799 57.9774",
                "duration": 500
            },
            {
                "path": "M446,133l0,0l27,0",
                "duration": 500
            }
        ],
        "dimensions": {
            "width": 490,
            "height":495
        }
    }
}; 


//map
var map;
var MY_MAPTYPE_ID = 'custom_style';
var centerLatLng = new google.maps.LatLng(34.070623, -118.444096);
function initialize() {


  var featureOpts = [
    {
      stylers: [
        { hue: '#3399DD' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    }
  ];


   var mapOptions = {
    zoom: 18,
    center: centerLatLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
     mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var styledMapOptions = {
    name: 'Custom Style'
  };


   var marker = new google.maps.Marker({
      position: centerLatLng,
      map: map,
      title: 'Ackerman Grand Ballroom'
  });


    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

}

//jquery
$(document).ready(function(){ 


    //intro animation BEGIN
    var $main=$('#main');
    var $cover=$('#cover');
    $main.hide();

    //paint
    $('#intro-logo').lazylinepainter( 
    {
        "svgData": pathObj,
        "strokeWidth": 7,
        "strokeColor": "#fff"
    }).lazylinepainter('paint');

    setTimeout(function(){$('#intro-caption').addClass('animation-target').css('display','block');},3600);
    setTimeout(function(){
        document.getElementById('main').style.visibility='visible';
        $main.show();
        initialize();
        $cover.fadeOut(800);
        $(".sub").addClass('animate-line');
    },5000);

    $('.skip').click(function(){
        document.getElementById('main').style.visibility='visible';
        $main.show();
        initialize();
        $cover.hide();
        $(".sub").addClass('animate-line');
    });

    //intro animation END


    var color=true;
    $('.others li').hover(function(){
        var $this=$(this);
        if (color){
            $this.stop().animate({backgroundColor: "#3399DD"},1000);
            $this.find('.side').stop().animate({backgroundColor: "#2E72AA"},1000);
            $this.find('.arrow-right').stop().animate({'border-left-color': "#2E72AA"},1000);
        } else {
            $this.stop().animate({backgroundColor: "#555"},700);
            $this.find('.side').stop().animate({backgroundColor: "#353535"},700);
            $this.find('.arrow-right').stop().animate({'border-left-color': "#353535"},700);
        }
        color=!color;
    }); 
   

    //scroll
    /*$("#find-map").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-3").offset().top
        }, 1000);
    });*/
     $("#to-top").click(function() {
        $('html, body').animate({
            scrollTop: $("#page-top").offset().top
        }, 1000);
    });

    $("#to-info").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-3").offset().top
        }, 1000);
    });

    $("#to-guest").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-4").offset().top
        }, 1000);
    });

    $("#to-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-2").offset().top
        }, 1000);
    });

      $("#to-organizers").click(function() {
        $('html, body').animate({
            scrollTop: $("#organisers").offset().top
        }, 1000);
    });

    $("#to-sponsors").click(function() {
        $('html, body').animate({
            scrollTop: $("#sponsors").offset().top
        }, 1000);
    });

    $("#to-map").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-5").offset().top
        }, 1000);
    });

    $("#rsvp").mouseenter(function(event) {
         $(this).animate({ backgroundColor:'white'},500);
         $("#rsvp a").css("color","#3399DD");
    }).mouseleave(function() {
        $(this).animate({ backgroundColor:'#3399DD'},500);
        $("#rsvp a").css("color","white");
         
    });

    
    var config = {
              move: '40px',
              over: '1s',
              reset: true,
              init: false,
              viewportFactor: 0.33
        };
    

    window.scrollReveal = new scrollReveal( config );
    scrollReveal.init();

});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-custom .nav li.active").css("background-color","#3399DD"); 
    }
});
