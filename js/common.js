$(function() {

// preloader
	$(".loader").delay(400).fadeOut("slow");
	$(".loader-inner").fadeOut();

// Dropdown toggle
$( ".line-toggle").on( "click", function() {
	$( this ).toggleClass( "active" );
});
$( ".link-drop").on( "click", function() {
	$( this ).toggleClass( "active" );
});
$( "#link1").on( "click", function() {
	$( "#for-link1" ).toggleClass( "visible" );
});
$( "#link2").on( "click", function() {
	$( "#for-link2" ).toggleClass( "visible" );
});
$( "#link3").on( "click", function() {
	$( "#for-link3" ).toggleClass( "visible" );
});
$( "#link4").on( "click", function() {
	$( "#for-link4" ).toggleClass( "visible" );
});
$( "#link5").on( "click", function() {
	$( "#for-link5" ).toggleClass( "visible" );
});

$( "#for-link-1").on( "click", function() {
	$( "#link-1" ).toggleClass( "part-visible" );
});
$( "#for-link-2").on( "click", function() {
	$( "#link-2" ).toggleClass( "part-visible" );
});
$( "#for-link-3").on( "click", function() {
	$( "#link-3" ).toggleClass( "part-visible" );
});
$( "#for-link-4").on( "click", function() {
	$( "#link-4" ).toggleClass( "part-visible" );
});
$( "#for-link-5").on( "click", function() {
	$( "#link-5" ).toggleClass( "part-visible" );
});

$('.dropdown-toggle').click(function(){
	$(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
	var target = e.target;
	if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
		$('.dropdown').hide();
	}
});

// menu
$('#my-menu').mmenu({
	extensions: {
		"(min-width: 767px)": ["border-full"],
		"(max-width: 767px)": ["fullscreen"]
	},
	offCanvas: {
		position  : 'right',
		zposition : 'front'
	}
});
var API = $('#my-menu').data('mmenu');

// api.bind('openPanel:start', function( $panel ) {
// 	$('.hamburger').addClass('is-active');
// });
// api.bind('openPanel:finish', function( $panel ) {
// 	$('.hamburger').removeClass('is-active');
// });

$(".hamburger").click(function() {
	API.open();
	API.close();
});
// -end menu

// toggle class
$( "#toggle1" ).on( "click", function() {
	$( "#accordion" ).toggleClass( "d-block", 500 );
});
// -end toggle class

// accortion
$( "#accordion" ).accordion({
	heightStyle: "content",
	active: 3,
	icons: { "header": "icon-right", "activeHeader": "icon-down" },
});
$( "#accordion1" ).accordion({
	heightStyle: "content",
	active: 3,
	icons: { "header": "icon-right", "activeHeader": "icon-down" },
});
// -end accordion

// autocomplete
$( function() {
	var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	$( "#tags" ).autocomplete({
		delay: 0,
		appendTo: ".widget-search",
		source: availableTags
	});
} );
// -end autocomplete

// button
	$( ".widget input[type=submit], .widget .btn, .widget .btn" ).button();
	$( ".btn" ).click( function( event ) {
		event.preventDefault();
	} );
// -end button

// Checkboxradio
	$( "input[type='radio']" ).checkboxradio();
	$( "input[type='checkbox']" ).checkboxradio();
// -end Checkboxradio

// countdown
var fiveSeconds = new Date().getTime() + 5000;
$('#clock').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function(event) {
	var $this = $(this);
	if (event.elapsed) {
		$this.html(event.strftime('After end: <span>%H:%M:%S</span>'));
	} else {
		$this.html(event.strftime('To end: <span>%H:%M:%S</span>'));
	}
});
// -end countdown

// Controlgroup
	$( ".controlgroup" ).controlgroup()
	$( ".controlgroup-vertical" ).controlgroup({
		"direction": "vertical"
	});
// -end Controlgroup

// file upload

jQuery('input[name="uploaded_file"]').bind('change', function() {
	/* VAR-1  */
    var $nameAttacheFile = jQuery(this).val(); //console.log($nameAttacheFile);
    regex = /\w+[.]\D{2,4}/i;
    $nameAttacheFile = regex.exec($nameAttacheFile);

    jQuery("#add_file_name").text($nameAttacheFile);

  });

jQuery('input[name="uploaded_file"]').bind('change', function() {
	/* VAR-1  */
    var $nameAttacheFile = jQuery(this).val(); //console.log($nameAttacheFile);
    regex = /\w+[.]\D{2,4}/i;
    $nameAttacheFile = regex.exec($nameAttacheFile);

    jQuery("#add_file_name1").text($nameAttacheFile);

  });

jQuery('input[name="uploaded_file"]').bind('change', function() {
	/* VAR-1  */
    var $nameAttacheFile = jQuery(this).val(); //console.log($nameAttacheFile);
    regex = /\w+[.]\D{2,4}/i;
    $nameAttacheFile = regex.exec($nameAttacheFile);

    jQuery("#add_file_name2").text($nameAttacheFile);

  });

$(function() {

	$('#dropzone').on('dragover', function() {
		$(this).addClass('hover');
	});

	$('#dropzone').on('dragleave', function() {
		$(this).removeClass('hover');
	});

	$('#dropzone input').on('change', function(e) {
		var file = this.files[0];

		$('#dropzone').removeClass('hover');

		if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
			return alert('File type not allowed.');
		}

		$('#dropzone').addClass('dropped');
		$('#dropzone img').remove();

		if ((/^image\/(gif|png|jpeg|jpg)$/i).test(file.type)) {
			var reader = new FileReader(file);

			reader.readAsDataURL(file);

			reader.onload = function(e) {
				var data = e.target.result,
				$img = $('<img />').attr('src', data).fadeIn();

				$('#dropzone div').html($img);
			};
		} else {
			var ext = file.name.split('.').pop();

			$('#dropzone div').html(ext);
		}
	});
});

$(function() {

	$('#dropzone1').on('dragover', function() {
		$(this).addClass('hover');
	});

	$('#dropzone1').on('dragleave', function() {
		$(this).removeClass('hover');
	});

	$('#dropzone1 input').on('change', function(e) {
		var file = this.files[0];

		$('#dropzone1').removeClass('hover');

		if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
			return alert('File type not allowed.');
		}

		$('#dropzone1').addClass('dropped');
		$('#dropzone1 img').remove();

		if ((/^image\/(gif|png|jpeg|jpg)$/i).test(file.type)) {
			var reader = new FileReader(file);

			reader.readAsDataURL(file);

			reader.onload = function(e) {
				var data = e.target.result,
				$img = $('<img />').attr('src', data).fadeIn();

				$('#dropzone1 div').html($img);
			};
		} else {
			var ext = file.name.split('.').pop();

			$('#dropzone1 div').html(ext);
		}
	});
});
// -end file upload

// Datepicker
$( "#datepicker" ).datepicker({
	changeMonth: true,
	changeYear: true
});
$( "#datepicker1" ).datepicker({
	changeMonth: true,
	changeYear: true
});
// -end Datepicker

// Dialog
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 500
		},
		hide: {
			effect: "explode",
			duration: 500
		}
	});

	$( "#opener" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
	});
// -end Dialog

// Menu
	$( "#menu" ).menu();
// -end Menu

// Progressbar
	$( "#progressbar" ).progressbar({
		value: 70
	});
// -end Progressbar

// Selectmenu
	$( "#speed" ).selectmenu({
		appendTo: ".tabs-select",
	});
	$( "#speed1" ).selectmenu({
		appendTo: "#for-speed1"
	});
	$( "#speed2" ).selectmenu({
		appendTo: "#for-speed2"
	});
	$( "#speed3" ).selectmenu({
		appendTo: "#for-speed3"
	});

	$( "#files" ).selectmenu();

	$( "#number" )
	.selectmenu()
	.selectmenu( "menuWidget" )
	.addClass( "overflow" );

	$( "#salutation" ).selectmenu();
// -end Selectmenu

// animatecss
	//waypoints official site http://imakewebthings.com/waypoints/
	$(".media-two").animated("bounceIn"); /*Используется в качестве примера*/
	$(".part-one").animated("bounceInRight"); /*Используется в качестве примера*/
	$(".part-two").animated("bounceInLeft"); /*Используется в качестве примера*/
	$(".widget-randposition").animated("fadeInUp"); /*Используется в качестве примера*/

	// -end  animatecss

// Slider
	$( "#slider" ).slider();
// -end Slider

// Spinner
	var spinner = $( "#spinner" ).spinner();

	$( "#disable" ).on( "click", function() {
		if ( spinner.spinner( "option", "disabled" ) ) {
			spinner.spinner( "enable" );
		} else {
			spinner.spinner( "disable" );
		}
	});
	$( "#destroy" ).on( "click", function() {
		if ( spinner.spinner( "instance" ) ) {
			spinner.spinner( "destroy" );
		} else {
			spinner.spinner();
		}
	});
	$( "#getvalue" ).on( "click", function() {
		alert( spinner.spinner( "value" ) );
	});
	$( "#setvalue" ).on( "click", function() {
		spinner.spinner( "value", 5 );
	});

	$( "button" ).button();
// -end Spinner

// Tabs
	$( "#tabs" ).tabs({
		active: 1,
		collapsible: true,
		show: { effect: "fade", duration: 150 },
		hide: { effect: "fade", duration: 150 }
	});
	$( "#tabs-second" ).tabs({
		active: 1,
		collapsible: true,
		show: { effect: "fade", duration: 150 },
		hide: { effect: "fade", duration: 150 }
	});
	$( "#tabs-third" ).tabs({
		active: 1,
		collapsible: true,
		heightStyle: "content",
		show: { effect: "blind", duration: 800 },
		hide: { effect: "blind", duration: 150 }
	});
	$( "#tabs-settings" ).tabs({
		collapsible: true,
		show: { effect: "fade", duration: 150 },
		hide: { effect: "fade", duration: 150 }
	});
	$( "#tabs-settings1" ).tabs({
		collapsible: true,
		show: { effect: "fade", duration: 150 },
		hide: { effect: "fade", duration: 150 }
	});
// -end Tabs

// counter
$('.counter').counterUp({
    delay: 3,
    time: 1000
});
// -end counter

// Tooltip
	$( document ).tooltip();
// -end Tooltip

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// popups
		$('#inline-popups').magnificPopup({
			delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});
		$('#inline-popups1').magnificPopup({
			delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
		$('#inline-popups2').magnificPopup({
			delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
	$('#inline-popups3').magnificPopup({
			delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
	$('#inline-popups4').magnificPopup({
			delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
	$('#inline-popups5').magnificPopup({
		delegate: 'a',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function() {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
	// -end popups

// social-likes
$ ('#social-likes1'). socialLikes ({
	url: 'https://vk.com/ofrontend',
	title: 'ofrontend',
	data: {
		media: 'https://pp.userapi.com/c636819/v636819660/19793/0BlTrV3wrJU.jpg'  // Image for Pinterest button
	}
});
// -end social-likes

	// OwlCarousel
	// documentation https://github.com/OwlCarousel2/OwlCarousel2
	$('#carousel-first').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		items: 1,
		navText: [ '', '' ]
	});
	$('#carousel-third').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		items: 1,
		navText: [ '', '' ]
	});
	$('#carousel-second').owlCarousel({
		loop:false,
		margin:18,
		nav:true,
		navText: [ '', '' ],
		responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    },
    // breakpoint from 480 up
    767 : {
   	 items: 3,
    },
    991 : {
   	 items: 4,
    }
  }
	});
	// -end OwlCarousel

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// ajax form
// Обязательно присутствует вместе с "mail.php"
$("form.callback").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		alert("Thank you!");
		setTimeout(function() {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	});
	return false;
});
// -end ajax form

// validate form
// documentation https://jqueryvalidation.org/documentation
$("#form-one").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-two").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-three").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-four").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password4"
		}
	}
});
$("#form-five").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password5"
		}
	}
});
$("#form-six").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-seven").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-eight").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
$("#form-nine").validate({
	rules: {
		password: "required",
		password_again: {
			equalTo: "#password"
		}
	}
});
// -end validate form

});