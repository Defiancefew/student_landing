$(document).ready(function() {

// Jquery Tabs
$(".top_phone .tab_item").not(":first").hide();
$(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tabs_header .tab_item").not(":first").hide();
$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".bottom_phone .tab_item").not(":first").hide();
$(".bottom_phone .wrapper .tab").click(function() {
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".s_contacts .tab_item").not(":first").hide();
$(".s_contacts  .tab").click(function() {
	$(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.review').stellar();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({items:1,dots:true});
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});