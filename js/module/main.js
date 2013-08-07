define(['jquery'],function($) {
  'use strict';

  var bgdivs;
	
	// initalize the application
	function init()
	{
		document.getElementById('background').classList.add('loaded');

		bgdivs = document.querySelectorAll('#background >div div');

		for (var d =0; d < bgdivs.length; d++)
		{
			bgdivs[d].classList.add('rotate');
		}

		document.querySelector('main').classList.add('rotate');

		window.addEventListener('scroll', _scrolling, false);
	}

	function _scrolling(evt)
	{
		var doc = document.documentElement, body = document.body;
		var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

		var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height(),
        scrollPercent = (s / (d-c)) * 100;
        scrollPercent = scrollPercent > 100 ? 100 : scrollPercent;
        scrollPercent = scrollPercent < 0 ? 0 : scrollPercent;
		
		for (var d =0; d < bgdivs.length; d++)
		{
			var val = ((scrollPercent/1000)*360)+(d*15);
			bgdivs[d].style.webkitTransform = "rotate("+val+"deg)";
			bgdivs[d].style.MozTransform = "rotate("+val+"deg)";
			bgdivs[d].style.msTransform = "rotate("+val+"deg)";
			bgdivs[d].style.OTransform = "rotate("+val+"deg)";
		}
	}

// return internally scoped var as value of globally scoped object

	return {
		init:init
	};
});