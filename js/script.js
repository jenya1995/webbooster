$(document).ready(
	function () {
		$('.header__burger').click(
			function (event) {
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
			})
})

$(document).ready(
	function () {
		$('.main-carts__item_4').slick({
			arrows: true,
			dots: true,
			adaptiveHeight: true,
			speed: 1000,
			//autoplay: true,
			autoplaySpeed: 1500,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: false,
			TouchThreshold: 10,
			waitForAnimate: false,
			variableWitth: true,
		})
	})