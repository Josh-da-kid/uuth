<script>
	import { Button } from 'carbon-components-svelte';
</script>

<main class="mb-12">
	<section
		class="md:flex justify-evenly items-center bg-gray-100 w-screen bg-cover bg-center bg-no-repeat py-12"
		style="background-image: url('https://img.freepik.com/free-photo/close-up-colorful-smoky-abstract_53876-148112.jpg?semt=ais_hybrid&w=740&q=80');"
	>
		<div class="sm:hidden justify-center items-center flex px-4">
			<img
				src="https://uniuyo.edu.ng/evoting/images/logonobg.png"
				alt="University badge icon"
				class="logo sm:hidden mt-4 h-[250px]"
			/>
		</div>
		<div class="flex flex-col lg:p-32 p-4 gap-4">
			<h1 class="font-semibold lg:w-[400px]">
				Our <span class="text-red-700">Services</span>
			</h1>
			<p class="sm:text-xl text-gray-500 text-break-words lg:w-[520px]">
				Comprehensive digital identity and authentication serives designed to enhance security,
				accountability, and service delivery at UCTH.
			</p>
			<Button kind="danger" class="sm:w-[180px] flex w-fit gap-4 sm:gap-0"
				>Get Started <span class="font-semibold">&gt&gt</span></Button
			>
		</div>

		<div>
			<img
				src="https://uniuyo.edu.ng/evoting/images/logonobg.png"
				alt="University badge icon"
				class="logo hidden md:flex mt-8"
			/>
		</div>
	</section>

	<section class="text-center items-center justify-center flex flex-col p-4 py-12">
		<h2 class="font-semibold lg:w-[500px]">THE UUTH DIGITAL REVOLUTION</h2>
		<p class="sm:text-xl text-gray-500 text-break-words lg:w-[685px] mt-5">
			What Epic is to Healthcare Systems, UUTH IDID is to African Medical Identity. We’re not just
			building healthcare software – we’re architecting the future of African medical services.
			Through intelligent innovation and inclusive design, we make enterprise-grade healthcare
			identity technology work even where infrastructure is challenging, connecting every patient,
			doctor, and healthcare worker from the most remote clinic to world-class medical opportunities
			through secure digital identity and multi-platform accessibility.
		</p>
	</section>

	<!-- Information Desk Section -->
	<!-- <section class="bg-white py-16 text-center">
		<h3 class="text-gray-600 text-sm font-medium">Blog <span class="text-red-700">Centre</span></h3>
		<h2 class="text-2xl font-semibold mt-2 mb-10">Information Desk</h2>

		<div class="grid md:grid-cols-3 gap-6 justify-center px-4 lg:px-20">
			Blog Card 1
			<div class="bg-gray-50 rounded-lg shadow-sm p-4 text-left">
				<img
					src="https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="CMD Office update"
					class="rounded-md mb-4"
				/>
				<h4 class="font-semibold text-gray-800 text-sm">CMD Office: New Policy Updates.</h4>
				<p class="text-gray-500 text-sm mt-2">
					Important policy changes from the Chief Medical Director’s office regarding patient care
					protocols and staff guidelines.
				</p>
				<a href="#" class="text-red-600 text-sm mt-2 inline-block hover:underline">Read More</a>
			</div>

			Blog Card 2
			<div class="bg-gray-50 rounded-lg shadow-sm p-4 text-left">
				<img
					src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="ICT Maintenance"
					class="rounded-md mb-4"
				/>
				<h4 class="font-semibold text-gray-800 text-sm">ICT: System Maintenance Notice</h4>
				<p class="text-gray-500 text-sm mt-2">
					Scheduled maintenance of hospital information systems. Electronic health records will be
					temporarily unavailable.
				</p>
				<a href="#" class="text-red-600 text-sm mt-2 inline-block hover:underline">Read More</a>
			</div>

			Blog Card 3
			<div class="bg-gray-50 rounded-lg shadow-sm p-4 text-left">
				<img
					src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="HR Staff Training"
					class="rounded-md mb-4"
				/>
				<h4 class="font-semibold text-gray-800 text-sm">HR: Staff Training Program</h4>
				<p class="text-gray-500 text-sm mt-2">
					Mandatory training sessions for all clinical and non-clinical staff. Registration
					deadlines and schedules inside.
				</p>
				<a href="#" class="text-red-600 text-sm mt-2 inline-block hover:underline">Read More</a>
			</div>
		</div>

		<a
			href="#"
			class="mt-8 underline font-semibold inline-block text-sm text-gray-600 hover:text-red-600"
			>See More</a
		>
	</section> -->

	<!-- Services Section -->
	<section class="py-16 bg-gray-50 text-center">
		<h2
			class="text-2xl font-semibold mt-2 mb-10 text-red-700 text-break-words lg:w-[400px] text-center mx-auto"
		>
			The Four Pillars of UUTH Transformation
		</h2>

		<p class="sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 text-sm">
			Each platform is a masterpiece of engineering, designed to wrok independently yet thrive
			together in perfect digital harmony.
		</p>

		<div class="grid md:grid-cols-2 gap-8 lg:px-40 px-6">
			<!-- Identity & Access -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center flex flex-col">
				<div
					class="flex justify-center items-center w-fit mx-auto p-4 text-center bg-white rounded-lg mb-1"
				>
					<svg
						class="text-red-700"
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="0 0 24 24"
						><g fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								stroke-linejoin="round"
								d="M14 3.5h-4c-3.771 0-5.657 0-6.828 1.172S2 7.729 2 11.5v1c0 3.771 0 5.657 1.172 6.828S6.229 20.5 10 20.5h4c3.771 0 5.657 0 6.828-1.172S22 16.271 22 12.5v-1c0-3.771 0-5.657-1.172-6.828S17.771 3.5 14 3.5Z"
							/><path stroke-linecap="round" d="M5 16c1.036-2.581 4.896-2.75 6 0" /><path
								d="M9.75 9.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Z"
							/><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14 8.5h5M14 12h5m-5 3.5h2.5"
							/></g
						></svg
					>
				</div>
				<h3 class="font-semibold text-2xl mb-2 flex text-center mx-auto justify-center">
					Identity & Access
				</h3>
				<div class="flex-grow">
					<p class="text-gray-500 text-sm sm:text-xl">Digital identity and access management</p>

					<h6 class="mt-4 text-gray-500 sm:text-xl">Services:</h6>
					<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
						<div class="sm:text-lg flex flex-col space-y-1 text-start">
							<li>Personnel IDID</li>
							<li>SmartHealth IDID</li>
							<li>BAAMS(Biometrics)</li>
							<li>IPass System</li>
						</div>
					</div>
				</div>

				<div class="mt-6">
					<a href="/digital-identity">
						<button class="sm:text-lg bg-white p-3 text-red-700"
							>Get Started <span class="font-semibold">&gt&gt</span></button
						></a
					>
				</div>
			</div>

			<!-- Financial Services -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center flex flex-col">
				<div
					class="flex justify-center items-center w-fit mx-auto p-4 text-center bg-white rounded-lg mb-1"
				>
					<svg
						class="text-blue-700"
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="0 0 24 24"
						><defs><path id="SVGgvnbobcx" d="M21.5 11v10h-19V11z" /></defs><g fill="none"
							><use href="#SVGgvnbobcx" /><path
								d="M12 13.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m5.136-7.209L19 5.67l1.824 5.333H3.002L3 11.004L14.146 2.1z"
							/><path
								stroke="currentColor"
								stroke-linecap="square"
								stroke-width="2"
								d="M21 11.003h-.176L19.001 5.67L3.354 11.003L3 11m-.5.004H3L14.146 2.1l2.817 3.95"
							/><g stroke="currentColor" stroke-linecap="square" stroke-width="2"
								><path d="M14.5 16a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" /><use
									href="#SVGgvnbobcx"
								/><path
									d="M2.5 11h2a2 2 0 0 1-2 2zm19 0h-2a2 2 0 0 0 2 2zm-19 10h2.002A2 2 0 0 0 2.5 18.998zm19 0h-2a2 2 0 0 1 2-2z"
								/></g
							></g
						></svg
					>
				</div>
				<h3 class="font-semibold text-2xl mb-2 flex text-center mx-auto justify-center">
					Financial Services
				</h3>
				<div class="flex-grow">
					<p class="text-gray-500 text-sm sm:text-xl">
						Manage staff salaries and hospital payments with PayQue — including payslips and salary
						tracking.
					</p>

					<h6 class="mt-4 text-gray-500 sm:text-xl">PayIQue System:</h6>
					<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
						<div class="sm:text-lg flex flex-col space-y-1 text-start">
							<li>Salary Tracking</li>
							<li>Payslips</li>
							<li>Payment Managements</li>
						</div>
					</div>
				</div>

				<div class="mt-6">
					<a href="/financial-services">
						<button class="sm:text-lg bg-white p-3 text-red-700"
							>Access PayIQueue <span class="font-semibold">&gt&gt</span></button
						></a
					>
				</div>
			</div>

			<!-- Communication Hub -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center flex flex-col">
				<div
					class="flex justify-center items-center w-fit mx-auto p-4 text-center bg-white rounded-lg mb-1"
				>
					<svg
						class="text-green-500"
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"
						/></svg
					>
				</div>
				<h3 class="font-semibold text-2xl mb-2 flex text-center mx-auto justify-center">
					Communication Hub
				</h3>
				<div class="flex-grow">
					<p class="sm:text-xl text-gray-500 text-sm">
						Internal messaging and feedback systems powered by UUTH Messenger and iReport.
					</p>

					<h6 class="sm:text-xl mt-4 text-gray-500">Features:</h6>
					<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
						<div class="sm:text-lg flex flex-col space-y-1 text-start">
							<li>UCTH Messenger</li>
							<li>iReport Feedback System</li>
						</div>
					</div>
				</div>

				<div class="mt-6">
					<button class="sm:text-lg bg-white p-3 text-red-700"
						>Connect Now <span class="font-semibold">&gt&gt</span></button
					>
				</div>
			</div>

			<!-- Clinical & Operations -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center flex flex-col">
				<div
					class="flex justify-center items-center w-fit mx-auto p-4 text-center bg-white rounded-lg mb-1"
				>
					<svg
						class="text-orange-500"
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="0 0 24 24"
						><g fill="none"
							><path d="M6 9V3h12v6h3v12H3V9z" /><path d="M10 21v-6h4v6z" /><path
								stroke="currentColor"
								stroke-linecap="square"
								stroke-width="2"
								d="M10 8h2m0 0h2m-2 0V6m0 2v2m-2 5v6h4v-6z"
							/><path
								stroke="currentColor"
								stroke-linecap="square"
								stroke-width="2"
								d="M5 3h1m13 0h-1M6 3v6H3v12h18V9h-3V3M6 3h12"
							/></g
						></svg
					>
				</div>
				<h3 class="font-semibold text-2xl mb-2 flex text-center mx-auto justify-center">
					Clinical & Operations
				</h3>
				<div class="flex-grow">
					<p class="sm:text-xl text-gray-500 text-sm">
						Optimized tools for hospital operations and clinical systems — ClinQx, EziBiz,
						iScheduler, and more.
					</p>

					<h6 class="mt-4 text-gray-500 sm:text-xl">Platforms:</h6>
					<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
						<div class="sm:text-lg flex flex-col space-y-1 text-start">
							<li>ClinIQx</li>
							<li>EziBiz</li>
							<li>iScheduler</li>

							<li>Staff ID Cards</li>
						</div>
					</div>
				</div>

				<div class="mt-6">
					<button class="sm:text-lg bg-white p-3 text-red-700"
						>Get Started <span class="font-semibold">&gt&gt</span></button
					>
				</div>
			</div>
		</div>
	</section>

	<section class="items-center text-center justify-center p-4 py-8 gap-5 flex flex-col">
		<h2 class="font-semibold">Ready to Revotionalize Healthcare?</h2>
		<p class="lg:w-[500px] sm:text-xl text-gray-500 text-sm">
			Join the digital transformation movement that's rewriting the future of African healthcare.
			Whethert you're one clinic or one thousand hospitals, one patient or one million patients -
			your journey to medical excellence starts with a single click.
		</p>

		<div class="items-center justify-center flex gap-5">
			<button class="border border-red-700 p-4 px-8">Log In</button>
			<Button kind="danger">Sign up</Button>
		</div>
	</section>
</main>
