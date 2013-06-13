$(function() {
	
	/* Powers main scrolling pages */
	$('#slider > ul') 
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'slow', 
		timeout: 0, 
		next:   '#next, .nextButton',
		prev:   '#prev',
		nowrap: true
	});
	
	$("#slider > ul").touchwipe({
		 wipeLeft: function() {
				$('#slider > ul').cycle('next');
			},
		 wipeRight: function() {
				$('#slider > ul').cycle('prev');
			},
		 min_move_x: 20,
		 min_move_y: 20,
		 preventDefaultEvents: false
	});
	
	$('ul#wordListSlider')
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'fast', 
		timeout: 0, 
		next:   '#next',
		prev:   '#prev',
		nowrap: true
	});
			
	$('.codePickTrigger').click(function() { 
		$('#overlay').fadeToggle();
		$('#codePick').fadeToggle();
		// var remember = $('.theCode h1.purple').html();
		// $('.theCode h1.purple').text("Y Côd Ymarfer");
		return false;
	});
	
	// Changes code names in the header bar
	$('.welshVersion #codePick a#codeOne').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>1</span>");
		$('.welshVersion #slider > ul').cycle(0);
		return false;
	});
	
	$('.welshVersion #codePick a#codeTwo').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>2</span>");
		$('.welshVersion #slider > ul').cycle(7);
		return false;
	});
	
	$('.welshVersion #codePick a#codeThree').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>3</span>");
		$('.welshVersion #slider > ul').cycle(15);
		return false;
	});

	$('.welshVersion #codePick a#codeFour').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>4</span>");
		$('.welshVersion #slider > ul').cycle(24);
		return false;
	});

	$('.welshVersion #codePick a#codeFive').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>5</span>");
		$('.welshVersion #slider > ul').cycle(30);
		return false;
	});

	$('.welshVersion #codePick a#codeSix').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>6</span>");
		$('.welshVersion #slider > ul').cycle(39);
		return false;
	});
	
	/* English */
	$('.englishVersion #codePick a#codeOne').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>1</span>");
		$('.englishVersion #slider > ul').cycle(0);
		return false;
	});
	
	$('.englishVersion #codePick a#codeTwo').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>2</span>");
		$('.englishVersion #slider > ul').cycle(7);
		return false;
	});
	
	$('.englishVersion #codePick a#codeThree').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>3</span>");
		$('.englishVersion #slider > ul').cycle(15);
		return false;
	});

	$('.englishVersion #codePick a#codeFour').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>4</span>");
		$('.englishVersion #slider > ul').cycle(24);
		return false;
	});

	$('.englishVersion #codePick a#codeFive').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>5</span>");
		$('.englishVersion #slider > ul').cycle(30);
		return false;
	});

	$('.englishVersion #codePick a#codeSix').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>6</span>");
		$('.englishVersion #slider > ul').cycle(39);
		return false;
	});

	/* Tooltips on click */
	$('.tooltip-code_of_practice').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-code_of_practice').fadeToggle();
	});
	
	$('a.tooltip-social_care_worker').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-social_care_worker').fadeToggle();
	});
	
	$('a.tooltip-employer').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-employer').fadeToggle();
	});
	
	$('.tooltip-service_user').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-service_user').fadeToggle();
	});
	
	$('a.tooltip-care_councils').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-care_councils').fadeToggle();
	});
	
	$('a.tooltip-standard').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-standard').fadeToggle();
	});
	
	$('.tooltip-policies').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-policies').fadeToggle();
	});
	
	$('a.tooltip-risk_assessment').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-risk_assessment').fadeToggle();
	});
	
	$('a.tooltip-dignity').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-dignity').fadeToggle();
	});

	/* Overlay */
	$('#overlay, .close').click(function() {
		$('#overlay').fadeOut();
		$('.tooltip').fadeOut();
		$('#codePick').fadeOut();
		$('.theCode h1.purple').html(remember);
	});
	
	/* Hides and shows arrows for scrolling pages */
	setInterval(function(){
		if ($('#slider ul li.first').css('z-index') === '10') {
			$('.slideNavigation.intro #prev').fadeOut();
			$('.slideNavigation.intro #backHome').hide();
		}
		else if ($('#slider ul li.last').css('z-index') === '10') {
			$('.slideNavigation.intro #next').hide();
			$('.slideNavigation.intro #backHome').fadeIn();
		}
		else {
			$('.slideNavigation.intro #next, .slideNavigation.intro #prev').show();
			$('.slideNavigation.intro #backHome').hide();
		}
	},100);

	setInterval(function(){
		if ($('#wordListSlider li.first').css('z-index') === '4') {
			$('.slideNavigation.wordList #prev').fadeOut();
		}
		else if ($('#wordListSlider li.last').css('z-index') === '4') {
			$('.slideNavigation.wordList #next').fadeOut();
		}
		else {
			$('.slideNavigation.wordList #next, .slideNavigation.wordList #prev').show();
		}
	},100);
	
	$('.nextButton, #next, #prev').click(function(){
		$('#audio').html('');
	});
		
});