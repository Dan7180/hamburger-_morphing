const humburger = document.querySelector('.humburger');

const toggleActive = function (e) {
	e.preventDefault();

	if (humburger.classList.contains('active')) {
		humburger.classList.remove('active');
		return;
	}

	humburger.classList.add('active');
};

humburger.addEventListener('click', toggleActive);
