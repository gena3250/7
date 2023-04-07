window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#nav-burger').addEventListener('click', function () {
		document.querySelector('#nav-burger__mobil').classList.toggle('is-active')
	})

	document.querySelector('#nav-burger__close').addEventListener('click', function () {
		document.querySelector('#nav-burger__mobil').classList.toggle('is-active')
	})

	document.querySelectorAll('.open').forEach(function (el) {
		el.addEventListener('click', function (event) {
			event.target.classList.toggle('open-click')
			
		})
	})
})