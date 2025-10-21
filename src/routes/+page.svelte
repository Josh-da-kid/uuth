<script>
	import { Button } from 'carbon-components-svelte';
</script>

<main class="mb-12 bg-gray-100">
	<section
		class="md:flex bg-gray-100 w-screen bg-cover bg-center bg-no-repeat py-12"
		style="background-image: url('https://img.freepik.com/free-photo/close-up-colorful-smoky-abstract_53876-148112.jpg?semt=ais_hybrid&w=740&q=80');"
	>
		<div>
			<img
				src="https://uniuyo.edu.ng/evoting/images/logonobg.png"
				alt="University badge icon"
				class="logo sm:hidden mt-4"
			/>
		</div>
		<div class="flex flex-col lg:p-32 p-4 gap-4">
			<h1 class="font-semibold lg:w-[400px]">
				UUTH <span class="text-red-700">IDID</span> Services
				<span class="text-red-700">Center</span>
			</h1>
			<p class="text-gray-500 text-break-words lg:w-[520px]">
				The Intelligent Digital Identity Services (IDIS) modernizes patient identification and staff
				authentication at UCTH using advanced digital technologies, positioning the hospital as a
				healthcare innovation leader in Nigeria.
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
		<h2 class="font-semibold lg:w-[500px]">University of Uyo(UUTH) IDID Services Center</h2>
		<p class="text-gray-500 text-break-words lg:w-[685px] mt-5">
			At the UUTH IDID Services Centre, we transform healthcare administration through innovative
			digital solutions. As Nigeria’s leading teaching hospital, UUTH leverages cutting-edge
			technology to create a unified digital ecosystem where healthcare professionals,
			administrators, and partners can collaborate effortlessly. Our comprehensive suite of
			intelligent services ensures secure access, streamlined workflows, and enhanced patient care
			delivery across all hospital departments.
		</p>
	</section>

	<!-- Information Desk Section -->
	<section class="bg-white py-16 text-center">
		<h3 class="text-gray-600 text-sm font-medium">Blog <span class="text-red-700">Centre</span></h3>
		<h2 class="text-2xl font-semibold mt-2 mb-10">Information Desk</h2>

		<div class="grid md:grid-cols-3 gap-6 justify-center px-4 lg:px-20">
			<!-- Blog Card 1 -->
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

			<!-- Blog Card 2 -->
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

			<!-- Blog Card 3 -->
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
	</section>

	<!-- Services Section -->
	<section class="py-16 bg-gray-50 text-center">
		<h3 class="text-gray-600 text-sm font-medium">
			Service <span class="text-red-700">Centre</span>
		</h3>
		<h2 class="text-2xl font-semibold mt-2 mb-10">What service do you need today?</h2>

		<p class="text-gray-500 max-w-2xl mx-auto mb-10 text-sm">
			Access our comprehensive digital services designed to streamline your hospital experience.
			Choose from our range of secure, efficient, and user-friendly solutions.
		</p>

		<div class="grid md:grid-cols-2 gap-8 lg:px-40 px-6">
			<!-- Identity & Access -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center">
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
				<p class="text-gray-500 text-sm">Digital identity and access management</p>

				<h6 class="mt-4 text-gray-500">Services:</h6>
				<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
                    <div class="flex flex-col space-y-2 text-start">
                        <li>Personnel IDID</li>
                        <li>SmartHealth IDID</li>
                        <li>BAAMS(Biometrics)</li>
                        <li>IPass System</li>

                    </div>
				</div>

				<div class="mt-4">
					<a href="/digital-identity">
						<button class="bg-white p-3 text-red-700"
							>Get Started <span class="font-semibold">&gt&gt</span></button
						></a
					>
				</div>
			</div>

			<!-- Financial Services -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center">
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
				<p class="text-gray-500 text-sm">
					Manage staff salaries and hospital payments with PayQue — including payslips and salary
					tracking.
				</p>

				<h6 class="mt-4 text-gray-500">PayIQue System:</h6>
				<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
                    <div class="flex flex-col space-y-2 text-start">
					<li>Salary Tracking</li>
					<li>Payslips</li>
					<li>Payment Managements</li>
                    </div>
				</div>

				<div class="mt-4">
					<a href="/financial-services">
						<button class="bg-white p-3 text-red-700"
							>Access PayIQueue <span class="font-semibold">&gt&gt</span></button
						></a
					>
				</div>
			</div>

			<!-- Communication Hub -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center">
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
				<p class="text-gray-500 text-sm">
					Internal messaging and feedback systems powered by UUTH Messenger and iReport.
				</p>

				<h6 class="mt-4 text-gray-500">Features:</h6>
				<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
                    <div class="flex flex-col space-y-2 text-start">
					<li>UCTH Messenger</li>
					<li>iReport Feedback System</li>
                    </div>
				</div>

				<div class="mt-4">
					<button class="bg-white p-3 text-red-700"
						>Connect Now <span class="font-semibold">&gt&gt</span></button
					>
				</div>
			</div>

			<!-- Clinical & Operations -->
			<div class="bg-red-100/70 shadow-sm rounded-lg p-8 text-center">
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
				<p class="text-gray-500 text-sm">
					Optimized tools for hospital operations and clinical systems — ClinQx, EziBiz, iScheduler,
					and more.
				</p>

				<h6 class="mt-4 text-gray-500">Platforms:</h6>
				<div class="flex flex-col items-center justify-center text-gray-500 mt-1 gap-1">
                    <div class="flex flex-col space-y-2 text-start">
					<li>ClinIQx</li>
					<li>EziBiz</li>
					<li>iScheduler</li>

					<li>Staff ID Cards</li>
                    </div>
				</div>

				<div class="mt-4">
					<button class="bg-white p-3 text-red-700"
						>Get Started <span class="font-semibold">&gt&gt</span></button
					>
				</div>
			</div>
		</div>
	</section>

	<!-- Connect with YOUreka Section -->
	<section
		class="border-2 border-red-700 py-16 bg-white flex flex-col lg:flex-row items-center justify-between px-8 lg:px-32 gap-8"
	>
		<div class="max-w-lg">
			<div class="w-fit p-4 bg-blue-500/30 rounded-lg mb-1">
				<svg
					class="text-red-700"
					xmlns="http://www.w3.org/2000/svg"
					width="45"
					height="45"
					viewBox="0 0 24 24"
					><g fill="none"
						><path
							d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
						/><path
							fill="currentColor"
							d="m17.303 9.524l3.182 3.182a5.5 5.5 0 1 1-7.778 7.778l-1.06-1.06a1.5 1.5 0 1 1 2.12-2.122l1.062 1.061a2.5 2.5 0 0 0 3.535-3.536l-3.182-3.182a2.5 2.5 0 0 0-2.681-.56q-.242.096-.454.196l-.464.217c-.62.28-1.097.4-1.704-.206c-.872-.872-.646-1.677.417-2.41a5.5 5.5 0 0 1 7.007.642m-6.01-6.01l1.06 1.06a1.5 1.5 0 0 1-2.12 2.122l-1.061-1.06A2.5 2.5 0 1 0 5.636 9.17l3.182 3.182a2.5 2.5 0 0 0 2.681.56q.242-.096.454-.196l.464-.217c.62-.28 1.098-.4 1.704.206c.872.872.646 1.677-.417 2.41a5.5 5.5 0 0 1-7.007-.642l-3.182-3.182a5.5 5.5 0 1 1 7.778-7.778Z"
						/></g
					></svg
				>
			</div>
			<h3 class="font-semibold text-lg mb-2">Connect with YOUreka</h3>
			<p class="text-gray-500 text-sm mb-4">
				Establish a secure YOUreka integrated single-sign-on system for seamless access to all
				services through one account.
			</p>
			<Button kind="danger">Contact Us →</Button>
		</div>

		<img
			src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800"
			alt="Happy hospital staff"
			class="w-full lg:w-[380px] shadow-md"
		/>
	</section>
</main>
