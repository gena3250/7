document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.mywork__item').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path
			
			document.querySelectorAll('.mywork-block').forEach(function (tabContent) {
				tabContent.classList.remove('mywork-active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('mywork-active')
		})
	})	
})