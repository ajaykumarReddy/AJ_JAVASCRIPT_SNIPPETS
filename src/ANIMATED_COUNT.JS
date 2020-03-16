const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


<header>
			<h1>Animated Counter</h1>
		</header>
		<section class="counters">
			<div class="container">
				<div>
					<i class="fab fa-youtube fa-4x"></i>
					<div class="counter" data-target="60000">0</div>
					<h3>Subscribers</h3>
				</div>
				<div>
					<i class="fab fa-twitter fa-4x"></i>
					<div class="counter" data-target="15000">0</div>
					<h3>Followers</h3>
				</div>
				<div>
					<i class="fab fa-facebook fa-4x"></i>
					<div class="counter" data-target="9000">0</div>
					<h3>Likes</h3>
				</div>
				<div>
					<i class="fab fa-linkedin fa-4x"></i>
					<div class="counter" data-target="5000">0</div>
					<h3>Connections</h3>
				</div>
			</div>
		</section>
