<script>
	import { Button } from 'carbon-components-svelte';
</script>

<main class="bg-gray-50 pb-16">
	<!-- Header Section -->
	<section class="text-center py-12 lg:py-20 bg-white shadow-sm">
		<h1 class="text-3xl md:text-4xl font-bold text-gray-900">
			About The UUTH <span class="text-red-700">IDID</span> Service
		</h1>
		<p class="text-gray-500 mt-4 max-w-3xl mx-auto px-4">
			Pioneering the future of digital healthcare administration in Nigeria through secure,
			efficient, and intelligent identity services.
		</p>
	</section>

	<!-- Our Mission Section -->
	<section class="py-16 lg:py-24 px-6 lg:px-32">
		<div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Our Mission</h2>
				<p class="mt-4 text-gray-600">
					Our mission is to transform healthcare administration at the University of Uyo Teaching
					Hospital (UUTH) with innovative digital solutions. We are dedicated to creating a unified
					digital ecosystem that enhances security, streamlines workflows, and improves patient care
					delivery across all hospital departments.
				</p>
				<p class="mt-4 text-gray-600">
					By modernizing patient identification and staff authentication, we position UUTH as a
					leader in healthcare innovation.
				</p>
			</div>
			<div class="flex justify-center">
				<img
					src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
					alt="Team collaborating on a project"
					class="rounded-lg shadow-lg object-cover w-full h-80"
				/>
			</div>
		</div>
	</section>

	<!-- What We Do Section -->
	<section class="py-16 lg:py-24 bg-white">
		<div class="text-center max-w-4xl mx-auto px-4">
			<h2 class="text-2xl md:text-3xl font-semibold text-gray-800">What We Do</h2>
			<p class="mt-4 text-gray-600">
				The UUTH IDID Service Centre is built on four pillars of transformation, providing a
				comprehensive suite of intelligent services to ensure secure access and streamlined
				workflows.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-32 mt-12">
			<!-- Pillar 1: Identity & Access -->
			<div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
				<h3 class="font-semibold text-red-700">Identity & Access</h3>
				<p class="text-sm text-gray-600 mt-2">
					Secure digital identity and access management for all personnel and patients.
				</p>
			</div>

			<!-- Pillar 2: Financial Services -->
			<div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
				<h3 class="font-semibold text-red-700">Financial Services</h3>
				<p class="text-sm text-gray-600 mt-2">
					Streamlined salary management and secure payment portals for hospital services.
				</p>
			</div>

			<!-- Pillar 3: Communication Hub -->
			<div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
				<h3 class="font-semibold text-red-700">Communication Hub</h3>
				<p class="text-sm text-gray-600 mt-2">
					Integrated internal messaging and feedback systems to enhance collaboration.
				</p>
			</div>

			<!-- Pillar 4: Clinical & Operations -->
			<div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
				<h3 class="font-semibold text-red-700">Clinical & Operations</h3>
				<p class="text-sm text-gray-600 mt-2">
					Optimized tools for hospital operations and clinical systems management.
				</p>
			</div>
		</div>
	</section>

	<!-- Our Vision Section -->
	<section class="py-16 lg:py-24 px-6 lg:px-32">
		<div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
			<div class="flex justify-center md:order-2">
				<img
					src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800"
					alt="Looking towards the future"
					class="rounded-lg shadow-lg object-cover w-full h-80"
				/>
			</div>
			<div class="md:order-1">
				<h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Our Vision</h2>
				<p class="mt-4 text-gray-600">
					Our vision is to set a new standard for African medical services. We are not just building
					software; we are architecting the future of healthcare identity technology, making it
					accessible, secure, and efficient for every patient, doctor, and healthcare worker.
				</p>
			</div>
		</div>
	</section>

	<!-- Call to Action Section -->
	<section class="text-center py-16 lg:py-24 px-6">
		<div class="max-w-2xl mx-auto">
			<h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Ready to Get Started?</h2>
			<p class="mt-4 text-gray-600">
				Explore our comprehensive suite of digital services designed to modernize healthcare
				administration and improve patient care at UUTH.
			</p>
			<div class="mt-8">
				<a href="/services">
					<Button kind="danger">Explore Services &rarr;</Button>
				</a>
			</div>
		</div>
	</section>
</main>
